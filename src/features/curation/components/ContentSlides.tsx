import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  type CurationItem,
  useActiveSlideId,
  useScrollTop,
  useSwiper,
} from '@/features/curation';
import { CURATION_PATH } from '@/shared/constants/paths';
import type { CurationsPath } from '@/shared/constants/paths';
import { Loader } from 'lucide-react';
import { ImpressionArea } from 'react-simplikit';
import useQurationInfiniteQuery from '../hooks/useQurationInfiniteQuery';
import styles from './ContentSlides.module.scss';

export default function ContentSlides() {
  const { handleSlideChange } = useActiveSlideId();
  const { handleSwiper } = useSwiper();
  const { scrollRef, handleScrollTop } = useScrollTop();

  return (
    <section className={styles.contents} ref={scrollRef}>
      <Swiper
        className="mySwiper"
        onSlideChange={(e) => {
          handleSlideChange(e.activeIndex);
          handleScrollTop();
        }}
        onSwiper={handleSwiper}
      >
        {Object.values(CURATION_PATH).map((path) => (
          <SwiperSlide key={path}>
            <Slide id={path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Slide({ id }: { id: CurationsPath }) {
  const {
    data: curations,
    fetchNextPage,
    isFetchingNextPage,
  } = useQurationInfiniteQuery({
    path: id,
  });

  return (
    <div className={styles.slide}>
      <h4>큐레이션 제목</h4>

      <ul className={styles.list}>
        {curations.map((curation) => (
          <ListItem key={curation.id} list={curation} />
        ))}
      </ul>

      <ImpressionArea
        onImpressionStart={fetchNextPage}
        areaThreshold={0.2}
        className={styles.loading}
      >
        {isFetchingNextPage && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
      </ImpressionArea>
    </div>
  );
}

function ListItem({ list }: { list: CurationItem }) {
  const { title, description, image } = list;

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
