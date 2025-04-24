import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useSlide from '@/shared/hooks/useSlide';
import styles from './ContentSlides.module.scss';

export default function ContentSlides() {
  const { handleSlideChange, handleSwiper } = useSlide();

  return (
    <section className={styles.contents}>
      <Swiper
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          handleSwiper(swiper);
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index.toString()}>
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Slide() {
  return (
    <div className={styles.slide}>
      <h4>큐레이션 제목</h4>

      <div className={styles.list}>
        {Array.from({ length: 100 }).map((_, index) => (
          <ListItem key={index.toString()} />
        ))}
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className={styles.item}>
      <div className={styles.item__wrapper}>
        <div className={styles.item__image} />
        <div className={styles.item__content}>
          <h5>큐레이션 제목</h5>
          <p>큐레이션 설명</p>
        </div>
      </div>
    </div>
  );
}
