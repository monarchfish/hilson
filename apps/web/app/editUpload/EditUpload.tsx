'use client'

import React, { useState } from 'react'

import styles from './EditUpload.module.scss'

export function EditUpload() {
  const [fileContent, setFileContent] = useState<string>('')

  const [fileName, setFileName] = useState<string>('edited-file.txt') // 預設檔名

  // 處理檔案選擇並讀取內容
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = async (event) => {
        const content = event.target?.result as string

        setFileContent(content) // 將檔案內容設定到 state
        setFileName(file.name) // 獲取檔案名稱
      }
      reader.readAsText(file) // 讀取檔案為文本
    }
  }

  // 讓使用者下載編輯後的檔案
  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: 'text/plain' })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url
    link.download = fileName // 設定下載的檔案名稱
    link.click()
    URL.revokeObjectURL(url) // 釋放 URL 物件
  }

  const handleRequest = async () => {
    const response = await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: 'abcd',
        fileName: 'filename'
      })
    })

    const json = await response.json()

    console.dir(json.message)
  }

  return (
    <div className={styles.container}>
      {/* 檔案上傳 */}
      <input type="file" onChange={handleFileChange} />

      {/* 檔案編輯區 */}
      <textarea
        style={{ width: '100%', height: '200px', marginTop: '1rem' }}
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)} // 編輯檔案內容
      />

      {/* 檔案下載 */}
      <button style={{ marginTop: '1rem' }} onClick={handleDownload}>
        Download Edited File
      </button>

      {/* API 測試 */}
      <button style={{ marginTop: '1rem' }} onClick={handleRequest}>
        Send a request
      </button>
    </div>
  )
}

export default EditUpload
