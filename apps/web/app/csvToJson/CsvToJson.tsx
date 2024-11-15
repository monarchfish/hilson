'use client';
import styles from './CsvToJson.module.scss';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { UploadFileButton } from '@hilson/ui';
import { TextField } from '@mui/material';
import { useNotificationStore } from '../../store/useNotificationStore';

export function CsvToJson() {
  const [jsonData, setJsonData] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setNotification } = useNotificationStore((state) => state);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setNotification(true, '請上傳文件', 'error');
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryString = event.target?.result;
      try {
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // 选择第一个工作表
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet); // 将工作表转换为 JSON

        setJsonData(JSON.stringify(json));
        setErrorMessage(null);
        setNotification(true, '上傳成功！', 'success');

      } catch (err) {
        if (err instanceof Error) {
          setNotification(true, err.message || '文件處理失敗', 'error');
        } else {
          console.log('未知錯誤', err);
          setNotification(true, '未知錯誤', 'error');
        }
      }
    };

    // 读取 CSV 文件为 binary 字符串
    reader.readAsBinaryString(file);
  };

  const handleSetText = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setJsonData(e.target.value)
  };

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
  );
}

export default CsvToJson;
