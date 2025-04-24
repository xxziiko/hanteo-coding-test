import useSlide from '@/shared/hooks/useSlide';
import {
  Carousel,
  ContentSlides,
  Footer,
  NavigationTab,
} from '@shared/components';
import styles from './Home.module.scss';

export default function Home() {
  const { activeSlide, handleTabClick } = useSlide();

  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <NavigationTab activeTab={activeSlide} onTabClick={handleTabClick} />

        <Carousel />

        <ContentSlides />
      </main>

      <Footer />
    </div>
  );
}
