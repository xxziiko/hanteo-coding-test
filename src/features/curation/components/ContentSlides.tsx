import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  type CurationItem,
  curationQuery,
  useScrollTop,
  useSlide,
} from '@/features/curation';
import { CURATION_PATH } from '@/shared/constants/paths';
import type { CurationsPath } from '@/shared/constants/paths';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { ImpressionArea } from 'react-simplikit';
import styles from './ContentSlides.module.scss';

export default function ContentSlides() {
  const { activeSlideId, handleSlideChange, handleSwiper } = useSlide();
  const { scrollRef } = useScrollTop({ activeTrigger: activeSlideId });

  return (
    <section className={styles.contents} ref={scrollRef}>
      <Swiper
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          handleSwiper(swiper);
        }}
      >
        {Object.values(CURATION_PATH).map((path, index) => (
          <SwiperSlide key={path}>
            <Slide id={path} isActive={activeSlideId === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Slide({ id, isActive }: { id: CurationsPath; isActive: boolean }) {
  const { data: curations, fetchNextPage } = useInfiniteQuery(
    curationQuery.list(id, isActive),
  );

  return (
    <div className={styles.slide}>
      <h4>큐레이션 제목</h4>

      <ul className={styles.list}>
        {curations?.map((curation) => (
          <ListItem key={crypto.randomUUID()} {...curation} />
        ))}
      </ul>

      <ImpressionArea
        onImpressionStart={fetchNextPage}
        areaThreshold={0.2}
        className={styles.loading}
      >
        <Loader className={styles.loader} />
      </ImpressionArea>
    </div>
  );
}

function ListItem({ title, description, image }: CurationItem) {
  return (
    <li className={styles.item}>
      <div className={styles.item__wrapper}>
        <div className={styles.item__image}>
          <img src={image} alt={title} loading="lazy" />
        </div>

        <div className={styles.item__content}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
