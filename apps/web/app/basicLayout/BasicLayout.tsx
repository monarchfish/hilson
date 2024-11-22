'use client'

import * as React from 'react'
import { useRef, useState } from 'react'
import { Popper } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'

import { ReactComponent as ArrowDropdown } from '../../public/arrowDropdown.svg'
import { ReactComponent as SvgIcon } from '../../public/toolIcons/jsonToCsv.svg'
import styles from './BasicLayout.module.scss'
import { ReactComponent as BrandIcon } from './icon.svg'

function Header() {
  const [open, setOpen] = useState(false)

  const anchorRef = useRef<HTMLDivElement | null>(null)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseOver = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
      timeoutRef.current = null
    }, 150)
  }

  const pages = [
    {
      title: 'JSON',
      items: [
        {
          label: 'JSON To CSV',
          link: '/jsonToCsv'
        },
        {
          label: 'CSV To JSON',
          link: '/csvToJson'
        }
      ]
    },
    {
      title: 'CSV',
      items: [
        {
          label: 'JSON To CSV',
          link: '/jsonToCsv'
        },
        {
          label: 'CSV To JSON',
          link: '/csvToJson'
        },
        {
          label: 'CSV To XLSX',
          link: '/csvToXlsx'
        }
      ]
    }
  ]

  return (
    <AppBar color="transparent" position="static" style={{ margin: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <BrandIcon className={styles.brandImg} />
          </Link>
          <div
            ref={anchorRef}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
          >
            <div className={styles.toolDropdown}>
              All Tools
              <ArrowDropdown className={styles.icon} />
            </div>
            <Popper anchorEl={anchorRef.current} open={open}>
              <div className={styles.toolPopper}>
                {pages.map((page) => (
                  <div key={page.title} className={styles.toolType}>
                    <div className={styles.title}>{page.title}</div>
                    <div className={styles.itemList}>
                      {page.items.map((item, key) => (
                        <Link
                          key={key}
                          className={styles.item}
                          href={item.link}
                        >
                          <SvgIcon className={styles.icon} />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Popper>
          </div>
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

export function BasicLayout({ children }: basicLayoutType) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BasicLayout
