'use client'

import styles from './BasicLayout.module.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Icon from './icon.svg';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const pages = [
    {
      label: 'JSON To CSV',
      link: '/jsonToCsv'
    },
    {
      label: 'CSV To JSON',
      link: '/csvToJson'
    },
    {
      label: 'CSV To Excel',
      link: '/csvToXlsx'
    },
    {
      label: 'Excel To CSV',
      link: '/jsonToCsv'
    }
  ]

  return (
    <AppBar position="static" color='transparent' style={{ margin: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image src={Icon} alt="" className={styles.brandImg} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.label} href={page.link}>
                <Button
                  sx={{ my: 2, color: '#161616', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>

            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

function Footer() {
  return (
    <div className={styles.footer}>
      <hr className={styles.dashedLine} />
      <p className={styles.slogon}>
        © iLoveDataFormatter {new Date().getFullYear()} ® - Your Data Editor
      </p>
    </div>
  )
}

interface basicLayoutType {
  children?: React.ReactNode
}

export function BasicLayout({
  children
}: basicLayoutType) {

  return (
    <div className={styles['container']}>
      <Header />
      {children}
      <Footer />
    </div >
  );
}

export default BasicLayout;
