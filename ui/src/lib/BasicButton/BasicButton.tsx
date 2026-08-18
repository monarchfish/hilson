/** @jsxImportSource @emotion/react */
'use client'

import Button from '@mui/material/Button'

import * as styles from './BasicButton.styles'

export interface ButtonProps {
  /**
   * The label displayed inside the button.
   */
  text: string
  /**
   * The MUI button variant style.
   */
  variant: 'text' | 'contained' | 'outlined'
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  /**
   * Additional CSS class name applied to the root element.
   */
  className?: string
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean
  /**
   * The MUI theme color applied to the button.
   */
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

/**
 * A reusable button component built on MUI Button with Emotion styling.
 */
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
