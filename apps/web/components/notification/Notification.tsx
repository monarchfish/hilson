'use client';
import { Alert } from '@mui/material';
import styles from './Notification.module.scss';
import { useEffect } from 'react';
import { NotificationType } from '../../store/useNotificationStore';

interface NotificationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: string;
  type: NotificationType;
}

function Notification({ open, setOpen, content, type }: NotificationProps) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, setOpen]);

  return (
    <div className={`${styles.container}`}>
      <Alert
        variant="filled"
        severity={type}
        className={`${styles.notification} ${open ? styles.active : styles.hide
          }`}
      >
        {content}
      </Alert>
    </div>
  );
}

export default Notification;
