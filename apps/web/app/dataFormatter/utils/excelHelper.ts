import ExcelJS from 'exceljs'

export type JsonRow = Record<
  string,
  string | number | boolean | null | undefined
>

/**
 * Parse raw CSV text into a JSON array.
 * First row is treated as headers.
 * Handles quoted fields with commas and newlines.
 */
export function parseCsvText(text: string): JsonRow[] {
  const rowList = parseCsvRowList(text)

  if (rowList.length < 2) {
    return []
  }

  const headerList = rowList[0]

  return rowList.slice(1).map((cellList) => {
    const row: JsonRow = {}

    headerList.forEach((header, index) => {
      const value = cellList[index] ?? ''

      const trimmed = value.trim()

      const asNumber = Number(trimmed)

      if (trimmed === '') {
        row[header] = ''
      } else if (!Number.isNaN(asNumber) && trimmed !== '') {
        row[header] = asNumber
      } else if (trimmed === 'true' || trimmed === 'false') {
        row[header] = trimmed === 'true'
      } else {
        row[header] = value
      }
    })

    return row
  })
}

/**
 * Build an ExcelJS Workbook from a JSON array.
 * Equivalent to XLSX.utils.json_to_sheet + book_new + book_append_sheet.
 */
export function jsonToWorkbook(
  data: JsonRow[],
  sheetName = 'Sheet1'
): ExcelJS.Workbook {
  const workbook = new ExcelJS.Workbook()

  const worksheet = workbook.addWorksheet(sheetName)

  if (data.length === 0) {
    return workbook
  }

  const keyList = Object.keys(data[0])

  worksheet.columns = keyList.map((key) => ({ header: key, key }))
  worksheet.addRows(data)

  return workbook
}

/**
 * Convert a JSON array to a CSV Blob.
 * Equivalent to XLSX.write(wb, { bookType: 'csv', type: 'array' }).
 */
export async function jsonToCsvBlob(data: JsonRow[]): Promise<Blob> {
  const workbook = jsonToWorkbook(data)

  const buffer = await workbook.csv.writeBuffer()

  return new Blob([buffer], { type: 'text/csv;charset=utf-8' })
}

function parseCsvRowList(text: string): string[][] {
  const resultList: string[][] = []

  let currentRow: string[] = []

  let currentField = ''

  let isInQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (isInQuotes) {
      if (char === '"') {
        if (i + 1 < text.length && text[i + 1] === '"') {
          currentField += '"'
          i++
        } else {
          isInQuotes = false
        }
      } else {
        currentField += char
      }
    } else if (char === '"') {
      isInQuotes = true
    } else if (char === ',') {
      currentRow.push(currentField)
      currentField = ''
    } else if (char === '\n') {
      currentRow.push(currentField)
      currentField = ''

      if (currentRow.some((cell) => cell.trim() !== '')) {
        resultList.push(currentRow)
      }

      currentRow = []
    } else if (char !== '\r') {
      currentField += char
    }
  }

  currentRow.push(currentField)

  if (currentRow.some((cell) => cell.trim() !== '')) {
    resultList.push(currentRow)
  }

  return resultList
}
