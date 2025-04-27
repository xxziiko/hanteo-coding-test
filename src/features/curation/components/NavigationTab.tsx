import { useActiveSlideId, useScrollTop, useSwiper } from '@/features/curation';
import styles from './NavigationTab.module.scss';

const TAB_LIST = [
  '차트',
  'Whook',
  '이벤트',
  '뉴스',
  '스토어',
  '충전소',
] as const;

export default function NavigationTab() {
  const { activeSlideId, handleSlideChange } = useActiveSlideId();
  const { handleSlideTo } = useSwiper();
  const { handleScrollTop } = useScrollTop();

  return (
    <nav className={styles.tab}>
      {TAB_LIST.map((tab, index) => (
        <button
          type="button"
          onClick={() => {
            handleSlideChange(index);
            handleSlideTo(index);
            handleScrollTop();
          }}
          key={tab}
          className={`${styles.tab__item} ${
            index === activeSlideId && styles['tab__item--active']
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
