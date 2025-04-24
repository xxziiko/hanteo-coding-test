import { Footer } from '@shared/components';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>{/* 메인 */}</main>

      <Footer />
    </div>
  );
}
