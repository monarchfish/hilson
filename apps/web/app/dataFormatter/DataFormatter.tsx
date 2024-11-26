'use client'

import { Link } from '@mui/material'

import { ReactComponent as SvgIcon } from '../../public/toolIcons/jsonToCsv.svg'
import styles from './DataFormatter.module.scss'

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
  )
}

function ToolList() {
  const dataFormatList = [
    {
      title: 'CSV To JSON',
      content: 'Convert CSV data to JSON format',
      link: 'dataFormatter/csvToJson'
    },
    {
      title: 'JSON To CSV',
      content: 'Convert JSON data to CSV file',
      link: 'dataFormatter/jsonToCsv'
    },
    {
      title: 'CSV To XLSX',
      content: 'Convert CSV data to XLSX file',
      link: 'dataFormatter/csvToXlsx'
    },
    {
      title: 'XML To JSON',
      content: 'Convert XML data to JSON format',
      link: 'dataFormatter/xmlToJson'
    },
    {
      title: 'JSON To XML',
      content: 'Convert JSON data to XML format',
      link: 'dataFormatter/jsonToXml'
    }
  ]

  return (
    <div className={styles.cardList}>
      {dataFormatList.map((item) => (
        <Link key={item.title} className={styles.card} href={item.link}>
          <div>
            <SvgIcon />
          </div>
          <div className={styles.cardTitle}>{item.title}</div>
          <div className={styles.cardContent}>{item.content}</div>
        </Link>
      ))}
    </div>
  )
}

function DataFormatter() {
  return (
    <div className={styles.container}>
      <PageTitle />
      <ToolList />
    </div>
  )
}

export default DataFormatter