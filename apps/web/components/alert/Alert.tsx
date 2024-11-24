'use client'

import { useEffect } from 'react'
import { Alert as BaseAlert } from '@mui/material'

import { AlertType } from '../../store/useAlertStore'
import styles from './Alert.module.scss'

interface AlertProps {
  alertInfo: {
    visible: boolean
    type: AlertType
    content: string
  }
  setAlertInfo: ({
    visible,
    type,
    content
  }: {
    visible: boolean
    type: AlertType
    content: string
  }) => void
}

function Alert({ alertInfo, setAlertInfo }: AlertProps) {
  useEffect(() => {
    if (alertInfo.visible) {
      const timer = setTimeout(() => {
        setAlertInfo({ ...alertInfo, visible: false })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [alertInfo, setAlertInfo])

  return (
    <div className={`${styles.container}`}>
      <BaseAlert
        className={`${styles.alert} ${alertInfo.visible ? styles.active : styles.hide
          }`}
        severity={alertInfo.type}
        variant="filled"
      >
        {alertInfo.content}
      </BaseAlert>
    </div>
  )
}

export default Alert
