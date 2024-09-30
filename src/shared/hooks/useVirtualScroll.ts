import { useEffect, useRef, useState } from 'react'

function useVirtualScroll<T>(items: T[], itemHeight: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const totalHeight = items.length * itemHeight;


        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.min(items.length - 1, Math.ceil((scrollTop + clientHeight) / itemHeight));

        setVisibleItems(items.slice(startIndex, endIndex + 1));
        setScrollHeight(totalHeight);
      }
    };

    const currentRef = containerRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, [items, itemHeight]);

  return { containerRef, visibleItems, scrollHeight };
}

export default useVirtualScroll;
