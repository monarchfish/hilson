'use client';
import { Link } from '@mui/material';
import styles from './Home.module.scss';
import React from 'react';
import SvgIcon from '../public/toolIcons/jsonToCsv.svg';
import Image from 'next/image';

function PageTitle() {
  return (
    <div className={styles.title}>
      <h3>Every tool you need to work with PDFs in one place</h3>
      <p>
        Every tool you need to use PDFs, at your fingertips. All are 100% FREE
        and easy to use! Merge, split, compress, convert, rotate, unlock and
        watermark PDFs with just a few clicks.
      </p>
    </div>
  );
}

function ToolList() {
  const dataFormatList = [
    {
      title: 'CSV To JSON',
      content: 'Convert CSV data to JSON format',
      link: '/csvToJson',
    },
    {
      title: 'JSON To CSV',
      content: 'Convert JSON data to CSV file',
      link: '/jsonToCsv',
    },
    {
      title: 'CSV To XLSX',
      content: 'Convert CSV data to XLSX file',
      link: '/csvToXlsx',
    },
  ];
  return (
    <div className={styles.cardList}>
      {dataFormatList.map((item) => (
        <Link key={item.title} className={styles.card} href={item.link}>
          <div>
            <Image src={SvgIcon} alt="" />
          </div>
          <div className={styles.cardTitle}>{item.title}</div>
          <div className={styles.cardContent}>{item.content}</div>
        </Link>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <div className={styles.container}>
      <PageTitle />
      <ToolList />
    </div>
  );
}

export default Home;
