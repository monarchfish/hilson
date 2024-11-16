'use client'
import { BasicLayout } from './basicLayout/BasicLayout';
import './global.scss';
import Alert from '../components/alert/Alert';
import { useAlertStore } from '../store/useAlertStore';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { alertInfo, setAlertInfo } = useAlertStore((state) => state)

  return (
    <html lang="en">
      <body>
        <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
