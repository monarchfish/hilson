'use client'

import { useState } from 'react'

import { TextField } from '@mui/material'

import { UploadFileButton } from '@hilson/ui'

import { useAlertStore } from '../../../store/useAlertStore'
import { parseCsvText } from '../utils/excelHelper'
import styles from './CsvToJson.module.scss'

export function CsvToJson() {
  const [jsonData, setJsonData] = useState('')

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

        setJsonData(JSON.stringify(json))
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

  const handleSetText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setJsonData(e.target.value)
  }

  return (
    <div className={styles.container}>
      <UploadFileButton acceptType=".csv" onChange={handleFileUpload} />

      <h3>JSON 資料:</h3>

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
