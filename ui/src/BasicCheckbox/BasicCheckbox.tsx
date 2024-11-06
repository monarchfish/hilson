'use client'
import Checkbox from '@mui/material/Checkbox';
import styles from './BasicCheckbox.module.scss';

export function BasicCheckbox() {
  return (
    <Checkbox className={styles.root} />
  );
}

export default BasicCheckbox;
