'use client'
import { BasicLayout } from './basicLayout/BasicLayout';
import './global.scss';
import Notification from '../components/notification/Notification';
import { useNotificationStore } from '../store/useNotificationStore';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen, content, type } = useNotificationStore((state) => state)

  return (
    <html lang="en">
      <body>
        <Notification open={open} setOpen={setOpen} content={content} type={type} />
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
