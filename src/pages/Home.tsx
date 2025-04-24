import {
  Carousel,
  Footer,
} from '@shared/components';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <Carousel />

      </main>

      <Footer />
    </div>
  );
}
