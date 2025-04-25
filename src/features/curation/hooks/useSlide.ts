import { atom, useAtom } from 'jotai';
import type { Swiper } from 'swiper';

const activeSlideAtom = atom(0);
const swiperRefAtom = atom<Swiper | null>(null);

export default function useSlide() {
  const [activeSlide, setActiveSlide] = useAtom(activeSlideAtom);
  const [swiper, setSwiper] = useAtom<Swiper | null>(swiperRefAtom);

  const goToSlice = (index: number) => {
    swiper?.slideTo(index);
  };

  const handleSlideChange = (e: Swiper) => {
    setActiveSlide(e.activeIndex);
  };

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    setActiveSlide(index);
    goToSlice(index);
  };

  const handleSwiper = (swiper: Swiper) => {
    setSwiper(swiper);
  };

  return {
    activeSlide,
    handleSlideChange,
    handleTabClick,
    handleSwiper,
  };
}
