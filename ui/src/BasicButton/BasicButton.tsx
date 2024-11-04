'use client';
import Button from '@mui/material/Button';
import * as styles from './BasicButton.styles';

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
  disabled = false
}: ButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`${styles.root} ${className || ''}`}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
