'use client';
import { Alert as BaseAlert } from '@mui/material';
import styles from './Alert.module.scss';
import { useEffect } from 'react';
import { AlertType } from '../../store/useAlertStore';

interface AlertProps {
  alertInfo: {
    visible: boolean;
    type: AlertType;
    content: string;
  },
  setAlertInfo: ({
    visible,
    type,
    content
  }: {
    visible: boolean;
    type: AlertType;
    content: string;
  }) => void;
}

function Alert({ alertInfo, setAlertInfo }: AlertProps) {
  useEffect(() => {
    if (alertInfo.visible) {
      const timer = setTimeout(() => {
        setAlertInfo({ visible: false, type: 'success', content: '' });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertInfo, setAlertInfo]);

  return (
    <div className={`${styles.container}`}>
      <BaseAlert
        variant="filled"
        severity={alertInfo.type}
        className={`${styles.alert} ${alertInfo.visible ? styles.active : styles.hide
          }`}
      >
        {alertInfo.content}
      </BaseAlert>
    </div>
  );
}

export default Alert;
