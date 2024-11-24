'use client'

import { useState } from 'react'
import { UploadFileButton } from '@hilson/ui'
import { TextField } from '@mui/material'
import * as XLSX from 'xlsx'

import { useAlertStore } from '../../store/useAlertStore'
import styles from './CsvToJson.module.scss'

export function CsvToJson() {
  const [jsonData, setJsonData] = useState('')

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { setAlertInfo } = useAlertStore((state) => state)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      setAlertInfo({ visible: true, type: 'error', content: '請上傳文件' })

      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      const binaryString = event.target?.result

      try {
        const workbook = XLSX.read(binaryString, { type: 'binary' })

        const sheetName = workbook.SheetNames[0]

        const worksheet = workbook.Sheets[sheetName]

        const json = XLSX.utils.sheet_to_json(worksheet)

        setJsonData(JSON.stringify(json))
        setErrorMessage(null)
        setAlertInfo({ visible: true, type: 'success', content: '上傳成功！' })
      } catch (err) {
        if (err instanceof Error) {
          setAlertInfo({
            visible: true,
            type: 'error',
            content: err.message || '文件處理失敗'
          })
        } else {
          console.log('未知錯誤', err)
          setAlertInfo({ visible: true, type: 'error', content: '未知錯誤' })
        }
      }
    }

    reader.readAsBinaryString(file)
  }

  const handleSetText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setJsonData(e.target.value)
  }

  return (
    <div className={styles.container}>
      <UploadFileButton acceptType=".csv" onChange={handleFileUpload} />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <h3>JSON 数据:</h3>

      <TextField
        multiline
        rows={4}
        value={jsonData}
        onChange={(e) => handleSetText(e)}
      />
    </div>
  )
}

export default CsvToJson
