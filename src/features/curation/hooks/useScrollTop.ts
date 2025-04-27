import { useRef } from 'react';

export default function useScrollTop() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  };

  return { scrollRef, handleScrollTop };
}
