'use client'

import { useState } from 'react'

import { TextField } from '@mui/material'
import { saveAs } from 'file-saver'

import { BasicButton, UploadFileButton } from '@hilson/ui'

import { useAlertStore } from '../../../store/useAlertStore'
import type { JsonRow } from '../utils/excelHelper'
import { jsonToWorkbook, parseCsvText } from '../utils/excelHelper'
import styles from './CsvToXlsx.module.scss'

function CsvToXlsx() {
  const [csvData, setCsvData] = useState<JsonRow[]>([])

  const [fileName, setFileName] = useState('')

  const { setAlertInfo } = useAlertStore((state) => state)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      setAlertInfo({ visible: true, type: 'error', content: '請上傳文件' })

      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      const text = event.target?.result as string

      try {
        const json = parseCsvText(text)

        setCsvData(json)
        setFileName('converted.xlsx')
        setAlertInfo({ visible: true, type: 'success', content: '上傳成功！' })
      } catch (err) {
        if (err instanceof Error) {
          setAlertInfo({
            visible: true,
            type: 'error',
            content: err.message || '文件處理失敗'
          })
        } else {
          console.error('Unexpected error during CSV parsing', err)
          setAlertInfo({ visible: true, type: 'error', content: '未知錯誤' })
        }
      }
    }

    reader.readAsText(file)
  }

  const exportToXlsx = async () => {
    try {
      const workbook = jsonToWorkbook(csvData)

      const buffer = await workbook.xlsx.writeBuffer()

      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      const outputName = fileName.endsWith('.xlsx')
        ? fileName
        : `${fileName}.xlsx`

      saveAs(blob, outputName)
    } catch (err) {
      if (err instanceof Error) {
        setAlertInfo({
          visible: true,
          type: 'error',
          content: err.message || '匯出檔案失敗'
        })
      } else {
        console.error('Unexpected error during XLSX export', err)
        setAlertInfo({ visible: true, type: 'error', content: '未知錯誤' })
      }
    }
  }

  return (
    <div className={styles.container}>
      <UploadFileButton acceptType=".csv" onChange={handleFileUpload} />

      <TextField
        id="outlined-required"
        label="檔案名稱"
        placeholder="請輸入檔案名稱"
        required
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />

      <BasicButton
        className={styles.button}
        disabled={!csvData.length}
        text="轉換並下載 XLSX"
        variant="contained"
        onClick={exportToXlsx}
      />
    </div>
  )
}

export default CsvToXlsx
