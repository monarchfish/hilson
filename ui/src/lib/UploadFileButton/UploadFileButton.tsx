/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import * as styles from './UploadFileButton.styles'

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

export interface UploadFileButtonProps {
  /**
   * The label displayed on the upload button.
   */
  text?: string
  /**
   * The MIME type filter for the file picker (e.g. ".csv", "image/*").
   */
  acceptType: string
  /**
   * Callback fired when the user selects a file.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The size of the button.
   */
  buttonSize?: 'small' | 'large'
}

/**
 * A file-upload button that wraps a hidden file input inside an MUI Button.
 */
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
