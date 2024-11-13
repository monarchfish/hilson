'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styles from './UploadFileButton.module.scss';
import clsx from 'clsx';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface UploadFileButtonProps {
  text?: string,
  acceptType: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonSize?: 'small' | 'large'
}

export function UploadFileButton({
  text = '上傳檔案',
  acceptType,
  buttonSize = 'large',
  onChange
}: UploadFileButtonProps) {

  const btnStyles = clsx(styles.root, styles[buttonSize]);

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      className={btnStyles}
      style={{
        backgroundColor: '#4caf50',
      }}
    >
      {text}
      <VisuallyHiddenInput
        type="file"
        onChange={onChange}
        multiple
        accept={acceptType}
      />
    </Button>
  );
}
