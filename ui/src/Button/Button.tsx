import styles from './Button.module.scss';
export interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
