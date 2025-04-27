import { atom, useAtom } from 'jotai';

const activeSlideIdAtom = atom(0);

export default function useActiveSlideId() {
  const [activeSlideId, setActiveSlideId] = useAtom(activeSlideIdAtom);

  const handleSlideChange = (index: number) => {
    setActiveSlideId(index);
  };

  return { activeSlideId, handleSlideChange };
}
