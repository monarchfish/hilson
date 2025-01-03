/** @jsxImportSource @emotion/react */
'use client'

import Button from '@mui/material/Button'

import * as styles from './BasicButton.styles'

export interface ButtonProps {
  text: string
  variant: 'text' | 'contained' | 'outlined'
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  className?: string
  disabled?: boolean
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit'
    | undefined
}

export function BasicButton({
  text,
  variant,
  onClick,
  className,
  disabled = false,
  color = 'primary'
}: ButtonProps) {
  return (
    <Button
      className={className}
      color={color}
      css={styles.root}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
