import { useEffect, useRef } from 'react';

export default function useScrollTop({
  activeTrigger,
}: {
  activeTrigger: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && activeTrigger !== null) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [activeTrigger]);

  return { scrollRef };
}
