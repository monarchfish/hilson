import styles from './Home.module.scss';
import { Button } from '@hilson/ui' 

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      <Button />
    </div>
  );
}

export default Home;
