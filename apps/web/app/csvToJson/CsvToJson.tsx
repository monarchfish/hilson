'use client';
import styles from './CsvToJson.module.scss';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { UploadFileButton } from '@hilson/ui';
import { TextField } from '@mui/material';

export function CsvToJson() {
  const [jsonData, setJsonData] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 处理文件上传并转换为 JSON
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setErrorMessage('請上傳文件');
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryString = event.target?.result;
      try {
        // 解析 CSV 文件
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // 选择第一个工作表
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet); // 将工作表转换为 JSON

        setJsonData(JSON.stringify(json)); // 设置 JSON 数据
        setErrorMessage(null); // 清空错误信息
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message || '文件處理失敗');
        } else {
          console.log('未知錯誤', err);
        }
      }
    };

    // 读取 CSV 文件为 binary 字符串
    reader.readAsBinaryString(file);
  };

  const handleSetText = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
  );
}

export default CsvToJson;
