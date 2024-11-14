'use client';
import styles from './JsonToCsv.module.scss';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { BasicButton } from '@hilson/ui';

interface DataRow {
  [key: string]: string | number | boolean;
}

export function JsonToCsv() {
  const [jsonData, setJsonData] = useState('');
  const [fileName, setFileName] = useState('export');
  const [error, setError] = useState('');

  const convertJsonToCsv = () => {
    try {
      // 解析 JSON 字串
      const parsedData: DataRow[] = JSON.parse(jsonData);

      if (!Array.isArray(parsedData) || parsedData.length === 0) {
        throw new Error('請提供有效的 JSON 陣列資料');
      }

      // 創建工作表
      const worksheet = XLSX.utils.json_to_sheet(parsedData);

      // 創建工作簿
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      // 生成 CSV
      const csvOutput = XLSX.write(workbook, {
        bookType: 'csv',
        type: 'array',
      });

      // 創建 Blob 並下載
      const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, `${fileName}.csv`);

      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || '轉換過程中發生錯誤');
      } else {
        console.log('未知错误', err);
      }
    }
  };

  const handleSampleData = () => {
    const sampleData = [
      { id: 1, name: 'John', age: 30, city: 'New York' },
      { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
      { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
    ];
    setJsonData(JSON.stringify(sampleData, null, 2));
  };

  return (
    <div className={styles.container}>
      <div>
        <label>
          檔案名稱:
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className={styles.filename}
            placeholder="請輸入檔案名稱"
          />
        </label>
      </div>

      <div>
        <label>
          JSON 資料:
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className={styles.dataInput}
            placeholder="請輸入 JSON 陣列資料"
          />
        </label>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.buttonGroup}>
        <BasicButton
          onClick={convertJsonToCsv}
          disabled={!jsonData}
          className={styles.button}
          text="轉換並下載 CSV"
          variant="contained"
        />

        <BasicButton
          onClick={handleSampleData}
          className={styles.button}
          text="載入範例資料"
          variant="contained"
        />
      </div>
    </div>
  );
}

export default JsonToCsv;
