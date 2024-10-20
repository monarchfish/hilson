import styles from './Button.module.scss';
export interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <div className={styles['container']}>
      {text}
    </div>
  );
}

export default Button;
