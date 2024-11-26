'use client'

import Alert from '../../components/alert/Alert'
import { useAlertStore } from '../../store/useAlertStore'
import DataFormatterLayout from './DataFormatterLayout/DataFormatterLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { alertInfo, setAlertInfo } = useAlertStore((state) => state)

  return (
    <>
      <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
      <DataFormatterLayout>{children}</DataFormatterLayout>
    </>
  )
}
