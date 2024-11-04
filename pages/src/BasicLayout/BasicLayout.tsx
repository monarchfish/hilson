'use client'

import styles from './BasicLayout.module.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Icon from './icon.svg';
import Image from 'next/image';
import Link from 'next/link';

interface basicLayoutType {
  children: React.ReactNode
}

export function BasicLayout({
  children
}: basicLayoutType) {
  const pages = [
    {
      label: 'JSON To CSV',
      link: '/jsonToCsv'
    },
    {
      label: 'CSV To Excel',
      link: '/jsonToCsv'
    },
    {
      label: 'Excel To CSV',
      link: '/jsonToCsv'
    }
  ]

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className={styles['container']}>
      <AppBar position="static" color='transparent' style={{ margin: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={Icon} alt="" className={styles.brandImg} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={`${page.label}_nav`} onClick={handleCloseNavMenu}>
                    <Link href={page.link}><Typography sx={{ textAlign: 'center' }}>{page.label}</Typography></Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page.label} href={page.link}>
                  <Button
                    onClick={handleCloseNavMenu}
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
      {children}
    </div >
  );
}

export default BasicLayout;
