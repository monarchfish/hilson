/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import Button from '@mui/material/Button'

import * as styles from './UploadFileButton.styles'
import { styled } from '@mui/material/styles'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

interface UploadFileButtonProps {
  text?: string
  acceptType: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  buttonSize?: 'small' | 'large'
}

export function UploadFileButton({
  text = '上傳檔案',
  acceptType,
  buttonSize = 'large',
  onChange
}: UploadFileButtonProps) {
  return (
    <Button
      component="label"
      css={styles.root(buttonSize)}
      role={undefined}
      style={{
        backgroundColor: '#4caf50'
      }}
      tabIndex={-1}
      variant="contained"
    >
      {text}
      <VisuallyHiddenInput
        accept={acceptType}
        multiple
        type="file"
        onChange={onChange}
      />
    </Button>
  )
}
