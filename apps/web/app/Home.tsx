'use client'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const sectionList = [
  {
    title: 'Data Formatter 工具',
    cardList: [
      {
        label: 'CSV to JSON',
        href: '/dataFormatter/csvToJson',
        description: '上傳 CSV 檔案，轉換為 JSON 格式顯示'
      },
      {
        label: 'JSON to CSV',
        href: '/dataFormatter/jsonToCsv',
        description: '輸入 JSON 陣列，轉換並下載 CSV 檔案'
      },
      {
        label: 'CSV to XLSX',
        href: '/dataFormatter/csvToXlsx',
        description: '上傳 CSV 檔案，轉換並下載 XLSX 檔案'
      },
      {
        label: 'XML to JSON',
        href: '/dataFormatter/xmlToJson',
        description: '即時雙欄轉換 XML 與 JSON'
      },
      {
        label: 'JSON to XML',
        href: '/dataFormatter/jsonToXml',
        description: '即時雙欄轉換 JSON 與 XML'
      }
    ]
  },
  {
    title: '檔案工具',
    cardList: [
      {
        label: 'Edit Upload',
        href: '/editUpload',
        description: '上傳文字檔、線上編輯、下載或 POST 至測試 API'
      }
    ]
  },
  {
    title: '帳號',
    cardList: [
      {
        label: 'Login',
        href: '/login',
        description: '登入頁（placeholder）'
      }
    ]
  }
]

/**
 * Project home page — card-based navigation to all feature pages.
 */
export function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        gutterBottom
        sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}
        variant="h3"
      >
        Hilson
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 6, textAlign: 'center' }}
        variant="subtitle1"
      >
        練習用 Nx monorepo — 選擇下方功能開始
      </Typography>

      {sectionList.map((section) => (
        <Box key={section.title} sx={{ mb: 5 }}>
          <Typography sx={{ fontWeight: 600, mb: 2 }} variant="h5">
            {section.title}
          </Typography>

          <Grid container spacing={3}>
            {section.cardList.map((card) => (
              <Grid key={card.href} size={{ md: 4, sm: 6, xs: 12 }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'box-shadow 0.2s',
                    '&:hover': { boxShadow: 6 }
                  }}
                  variant="outlined"
                >
                  <CardActionArea
                    LinkComponent={Link}
                    href={card.href}
                    sx={{ height: '100%' }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                        variant="h6"
                      >
                        {card.label}
                      </Typography>

                      <Typography color="text.secondary" variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  )
}

export default Home
