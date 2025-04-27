import { Loader } from 'lucide-react';
import styles from './Loader.module.scss';

export default function Loading({ height }: { height?: string }) {
  return (
    <div className={styles.loading} style={{ height }}>
      <Loader className={styles.loader} />
    </div>
  );
}
