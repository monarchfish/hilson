'use client';
import Button from '@mui/material/Button';
import styles from './BasicButton.module.scss';
import { clsx } from 'clsx';

export interface ButtonProps {
  text: string;
  variant: 'text' | 'contained' | 'outlined';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function BasicButton({
  text,
  variant,
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  const btnStyle = clsx(styles.root, className || '');

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={btnStyle}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
