'use client'

import * as React from 'react'
import { useState } from 'react'
import { BasicButton } from '@hilson/ui'
import xml2js from 'xml2js'

import { useAlertStore } from '../../../store/useAlertStore'
import styles from './JsonToXml.module.scss'

export function JsonToXml() {
  const [jsonData, setJsonData] = useState('')

  const [xmlData, setXmlData] = useState('')

  const { setAlertInfo } = useAlertStore((state) => state)

  const convertJsonToXml = (sampleData?: string) => {
    try {
      const builder = new xml2js.Builder()

      const xml = builder.buildObject(JSON.parse(sampleData || jsonData))

      setXmlData(xml)
    } catch {
      setAlertInfo({
        visible: true,
        type: 'error',
        content: '轉換失敗，請檢查輸入格式'
      })
    }
  }

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlData)

    setAlertInfo({
      visible: true,
      type: 'success',
      content: '複製成功！'
    })
  }

  const handleSetSample = () => {
    const sampleData = {
      'employees': {
        'employee': [
          {
            'id': '1',
            'firstName': 'Tom',
            'lastName': 'Cruise',
            'photo': 'https://jsonformatter.org/img/tom-cruise.jpg'
          },
          {
            'id': '2',
            'firstName': 'Maria',
            'lastName': 'Sharapova',
            'photo': 'https://jsonformatter.org/img/Maria-Sharapova.jpg'
          },
          {
            'id': '3',
            'firstName': 'Robert',
            'lastName': 'Downey Jr.',
            'photo': 'https://jsonformatter.org/img/Robert-Downey-Jr.jpg'
          }
        ]
      }
    }

    setJsonData(JSON.stringify(sampleData))
    convertJsonToXml(JSON.stringify(sampleData))
  }

  const handleClearData = () => {
    setJsonData('')
    setXmlData('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <BasicButton
          disabled={!xmlData}
          text="Copy"
          variant="contained"
          onClick={handleCopyXml}
        />
        <BasicButton
          color="info"
          disabled={!xmlData && !jsonData}
          text="Clear"
          variant="contained"
          onClick={handleClearData}
        />
        <BasicButton
          color="secondary"
          text="Sample"
          variant="contained"
          onClick={handleSetSample}
        />
      </div>
      <div className={styles.mainContent}>
        <textarea
          className={styles.dataInput}
          placeholder="請輸入JSON資料"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
        <BasicButton
          className={styles.transferBtn}
          disabled={!jsonData}
          text=">>"
          variant="contained"
          onClick={() => convertJsonToXml()}
        />
        <textarea
          className={styles.dataInput}
          placeholder="請輸入XML資料"
          value={xmlData}
          onChange={(e) => setXmlData(e.target.value)}
        />
      </div>
    </div>
  )
}

export default JsonToXml
