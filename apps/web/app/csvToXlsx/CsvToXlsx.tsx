'use client';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import styles from './CsvToXlsx.module.scss';
import { BasicButton, UploadFileButton } from '@hilson/ui';
import { TextField } from '@mui/material';

function CsvToXlsx() {
  const [csvData, setCsvData] = useState<unknown[]>([]);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target?.result as string;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // 获取第一个工作表
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet); // CSV 转 JSON
      setCsvData(json); // 设置 CSV 转换后的数据
      setFileName('converted.xlsx');
    };

    reader.readAsBinaryString(file); // 读取文件为二进制字符串
  };

  const exportToXlsx = () => {
    const worksheet = XLSX.utils.json_to_sheet(csvData); // 将 JSON 转为工作表
    const workbook = XLSX.utils.book_new(); // 创建一个新工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); // 将工作表添加到工作簿中

    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className={styles.container}>
      <UploadFileButton acceptType=".csv" onChange={handleFileUpload} />

      <TextField
        required
        id="outlined-required"
        label="檔案名稱"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="請輸入檔案名稱"
      />

      <BasicButton
        onClick={exportToXlsx}
        disabled={!csvData.length}
        className={styles.button}
        text="轉換並下載 XLSX"
        variant="contained"
      />
    </div>
  );
}

export default CsvToXlsx;
