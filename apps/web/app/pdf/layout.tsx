'use client'

import Alert from '../../components/alert/Alert'
import { useAlertStore } from '../../store/useAlertStore'
import PDFLayout from './PDFLayout/PDFLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { alertInfo, setAlertInfo } = useAlertStore((state) => state)

  return (
    <>
      <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
      <PDFLayout>{children}</PDFLayout>
    </>
  )
}
