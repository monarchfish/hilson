'use client';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import styles from './CsvToXlsx.module.scss';
import { BasicButton, UploadFileButton } from '@hilson/ui';
import { TextField } from '@mui/material';
import { useAlertStore } from '../../store/useAlertStore';

function CsvToXlsx() {
  const [csvData, setCsvData] = useState<unknown[]>([]);
  const [fileName, setFileName] = useState('');
  const { setAlertInfo } = useAlertStore((state) => state);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setAlertInfo({ visible: true, type: 'error', content: '請上傳文件' });
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target?.result as string;

      try {
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        setCsvData(json);
        setFileName('converted.xlsx');
        setAlertInfo({ visible: true, type: 'success', content: '上傳成功！' });
      } catch (err) {
        if (err instanceof Error) {
          setAlertInfo({
            visible: true,
            type: 'error',
            content: err.message || '文件處理失敗'
          });
        } else {
          console.log('未知錯誤', err);
          setAlertInfo({ visible: true, type: 'error', content: '未知錯誤' });
        }
      }
    };

    reader.readAsBinaryString(file);
  };

  const exportToXlsx = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(csvData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      XLSX.writeFile(workbook, fileName);
    } catch (err) {
      if (err instanceof Error) {
        setAlertInfo({
          visible: true,
          type: 'error',
          content: err.message || '匯出檔案失敗'
        });
      } else {
        console.log('未知錯誤', err);
        setAlertInfo({ visible: true, type: 'error', content: '未知錯誤' });
      }
    }
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
