import styles from './Home.module.scss';
import { BasicButton } from '@hilson/ui';


export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      <BasicButton text="test Button" variant='contained' />
    </div>
  );
}

export default Home;
