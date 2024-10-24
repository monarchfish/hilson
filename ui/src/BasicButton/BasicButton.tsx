'use client'
import Button from '@mui/material/Button';
import * as styles from './BasicButton.styles';

export interface ButtonProps {
  text: string;
  variant: 'text' | 'contained' | 'outlined';
}

export function BasicButton({ text, variant }: ButtonProps) {

  return (
    <Button variant={variant} className={`${styles.root}`}> {text}</Button >
  )
}
