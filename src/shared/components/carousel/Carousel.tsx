import { memo } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { CAROUSEL_LIST } from '@/shared/_mock';
import { Card } from '@/shared/components';
import styles from './Carousel.module.scss';

function Carousel() {
  return (
    <section className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: false,
          bulletActiveClass: styles['swiper-pagination-bullet-active'],
        }}
        slidesPerView={1.2}
        spaceBetween={26}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
      >
        {CAROUSEL_LIST.map((content) => (
          <SwiperSlide key={content.id}>
            <Card {...content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default memo(Carousel);
