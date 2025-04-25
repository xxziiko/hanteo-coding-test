import styles from './NavigationTab.module.scss';

const TAB_LIST = [
  '차트',
  'Whook',
  '이벤트',
  '뉴스',
  '스토어',
  '충전소',
] as const;

export default function NavigationTab({
  activeTab,
  onTabClick,
}: {
  activeTab: number;
  onTabClick: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}) {
  const isActive = (index: number) => index === activeTab;

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
