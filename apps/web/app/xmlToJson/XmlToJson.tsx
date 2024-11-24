'use client'

import * as React from 'react'
import { useState } from 'react'
import { BasicButton } from '@hilson/ui'
import { parseString } from 'xml2js'

import { useAlertStore } from '../../store/useAlertStore'
import styles from './XmlToJson.module.scss'

export function XmlToJson() {
  const [xmlData, setXmlData] = useState('')

  const [jsonData, setJsonData] = useState('')

  const { setAlertInfo } = useAlertStore((state) => state)

  const convertXmlToJson = () => {
    parseString(xmlData, function (err, result) {
      if (err) {
        setAlertInfo({
          visible: true,
          type: 'error',
          content: '轉換失敗，請檢查輸入格式'
        })

        return
      }

      setJsonData(JSON.stringify(result))
    })
  }

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonData)

    setAlertInfo({
      visible: true,
      type: 'success',
      content: '複製成功！'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <BasicButton
          disabled={!jsonData}
          text="Copy"
          variant="contained"
          onClick={handleCopyJson}
        />
      </div>
      <div className={styles.mainContent}>
        <textarea
          className={styles.dataInput}
          placeholder="請輸入XML資料"
          value={xmlData}
          onChange={(e) => setXmlData(e.target.value)}
        />
        <BasicButton
          className={styles.transferBtn}
          disabled={!xmlData}
          text=">>"
          variant="contained"
          onClick={convertXmlToJson}
        />
        <textarea
          className={styles.dataInput}
          placeholder="請輸入JSON資料"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
      </div>
    </div>
  )
}

export default XmlToJson
