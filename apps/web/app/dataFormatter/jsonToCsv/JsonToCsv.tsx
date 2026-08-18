'use client'

import { useState } from 'react'

import { saveAs } from 'file-saver'

import { BasicButton } from '@hilson/ui'

import type { JsonRow } from '../utils/excelHelper'
import { jsonToCsvBlob } from '../utils/excelHelper'
import styles from './JsonToCsv.module.scss'

export function JsonToCsv() {
  const [jsonData, setJsonData] = useState('')

  const [fileName, setFileName] = useState('export')

  const [error, setError] = useState('')

  const convertJsonToCsv = async () => {
    try {
      const parsedData: JsonRow[] = JSON.parse(jsonData)

      if (!Array.isArray(parsedData) || parsedData.length === 0) {
        throw new Error('請提供有效的 JSON 陣列資料')
      }

      const blob = await jsonToCsvBlob(parsedData)

      saveAs(blob, `${fileName}.csv`)

      setError('')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || '轉換過程中發生錯誤')
      } else {
        console.error('Unexpected error during JSON to CSV conversion', err)
      }
    }
  }

  const handleSampleData = () => {
    const sampleData = [
      { id: 1, name: 'John', age: 30, city: 'New York' },
      { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
      { id: 3, name: 'Bob', age: 35, city: 'Chicago' }
    ]

    setJsonData(JSON.stringify(sampleData, null, 2))
  }

  return (
    <div className={styles.container}>
      <div>
        <label>
          檔案名稱:
          <input
            className={styles.filename}
            placeholder="請輸入檔案名稱"
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          JSON 資料:
          <textarea
            className={styles.dataInput}
            placeholder="請輸入 JSON 陣列資料"
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
          />
        </label>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.buttonGroup}>
        <BasicButton
          className={styles.button}
          disabled={!jsonData}
          text="轉換並下載 CSV"
          variant="contained"
          onClick={convertJsonToCsv}
        />

        <BasicButton
          className={styles.button}
          text="載入範例資料"
          variant="contained"
          onClick={handleSampleData}
        />
      </div>
    </div>
  )
}

export default JsonToCsv
