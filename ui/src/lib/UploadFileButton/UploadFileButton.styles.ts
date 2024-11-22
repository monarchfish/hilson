import { css } from '@emotion/react'

export const small = css`
  width: 128px;
  height: 40px;
  font-size: 16px;
`

export const large = css`
  width: 330px;
  height: 80px;
  font-size: 24px;
`

export const root = (buttonSize: 'small' | 'large') =>
  buttonSize === 'small' ? small : large
