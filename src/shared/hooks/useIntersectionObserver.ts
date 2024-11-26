import { useEffect, useRef, useCallback } from 'react'

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  enabled?: boolean;
}

// Переименовать в useIntersectionInfiniteScroll или сделать его боле общим и на основе него useIntersectionInfiniteScroll
function useIntersectionObserver({
   onIntersect,
   enabled = true,
}: UseIntersectionObserverProps) {
  // const targetRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const element = targetRef.current;
    if (!element) {
      return;
    }

    const defaultOptions = { rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver(handleObserver, defaultOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [enabled, handleObserver]);

  return targetRef;
}

export default useIntersectionObserver;
