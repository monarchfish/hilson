import styles from './home.module.scss';

import { HilsonButton } from '@hilson/HilsonButton'
import { HilsonTitle } from '@hilson/HilsonTitle'

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      <HilsonButton />
      <HilsonTitle />
    </div>
  );
}

export default Home;
