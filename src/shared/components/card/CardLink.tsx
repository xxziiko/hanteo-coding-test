import type { BannerItem } from '@/features/banner/types';
import styles from './CardLink.module.scss';

export default function CardLink({ title, date, image, link }: BannerItem) {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.card__image}>
          <img src={image} alt="card" width="100%" loading="lazy" />
        </div>

        <div className={styles.card__content}>
          <div className={styles.card__header}>
            <p className={styles.card__title}>{title}</p>
            <div className={styles.card__label}>투표하기</div>
          </div>

          <p className={styles.card__date}>{date}</p>
        </div>
      </a>
    </div>
  );
}
