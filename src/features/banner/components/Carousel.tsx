import { memo } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { CardLink } from '@/shared/components';
import { useSuspenseQuery } from '@tanstack/react-query';
import { bannerQuery } from '../queries';
import styles from './Carousel.module.scss';

function Carousel() {
  const { data: banners } = useSuspenseQuery(bannerQuery.list());

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
          disableOnInteraction: false,
        }}
      >
        {banners.map((content) => (
          <SwiperSlide key={content.id}>
            <CardLink {...content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default memo(Carousel);
