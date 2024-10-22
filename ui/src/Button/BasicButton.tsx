// import styles from './Button.module.scss';
import * as React from 'react';
import Button from '@mui/material/Button';

export interface ButtonProps {
  text: string;
  variant: 'text' | 'contained' | 'outlined';
}

export function BasicButton({ text, variant }: ButtonProps) {
  return (
    <Button variant={variant}>{text}</Button>
  );
}
