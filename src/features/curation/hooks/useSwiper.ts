import { atom, useAtom } from 'jotai';
import type { Swiper } from 'swiper';

const swiperAtom = atom<Swiper | null>(null);

export default function useSwiper() {
  const [swiper, setSwiper] = useAtom<Swiper | null>(swiperAtom);

  const handleSlideTo = (index: number) => {
    swiper?.slideTo(index);
  };

  const handleSwiper = (swiper: Swiper) => {
    setSwiper(swiper);
  };

  return { swiper, handleSwiper, handleSlideTo };
}
