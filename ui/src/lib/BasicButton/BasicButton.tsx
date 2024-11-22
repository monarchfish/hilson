'use client'

import Button from '@mui/material/Button'

import * as styles from './BasicButton.styles'

export interface ButtonProps {
  text: string
  variant: 'text' | 'contained' | 'outlined'
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  className?: string
  disabled?: boolean
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
      className={className}
      css={styles.root}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
