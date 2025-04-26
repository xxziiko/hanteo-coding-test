import { TAB_LIST } from '@/shared/constants/tabs';
import styles from './NavigationTab.module.scss';

export default function NavigationTab({
  activeTabId,
  onTabClick,
}: {
  activeTabId: number;
  onTabClick: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}) {
  const isActive = (index: number) => index === activeTabId;

  return (
    <nav className={styles.tab}>
      {TAB_LIST.map((tab, index) => (
        <button
          type="button"
          onClick={(e) => onTabClick(e, index)}
          key={tab}
          className={`${styles.tab__item} ${
            isActive(index) && styles['tab__item--active']
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
