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
  disabled = false,
}: ButtonProps) {

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={className}
      css={styles.root}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
