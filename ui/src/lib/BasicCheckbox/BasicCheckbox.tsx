/** @jsxImportSource @emotion/react */
'use client'

import Checkbox from '@mui/material/Checkbox'

import * as styles from './BasicCheckbox.styles'

/**
 * A simple checkbox component built on MUI Checkbox with Emotion styling.
 */
export function BasicCheckbox() {
  return <Checkbox css={styles.root} />
}

export default BasicCheckbox
