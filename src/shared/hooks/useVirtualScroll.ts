import { useCallback, useState } from 'react'

export type ScrollDirection = 'forward' | 'backward';

export type ScrollState = {
  scrollOffset: number;
  scrollDirection: ScrollDirection;
}

function useVirtualScroll() {
  const initValue: ScrollState = { scrollOffset: 0, scrollDirection: 'forward' };
  const [scrollState, setScrollState] = useState<ScrollState>(initValue);

  const onScroll = useCallback((clientExtent: number, scrollExtent: number, scrollOffset: number) => {
    if (scrollState.scrollOffset === scrollOffset) {
      return;
    }

    const newOffset = Math.max(0, Math.min(scrollOffset, scrollExtent - clientExtent));
    const newScrollDirection = scrollState.scrollOffset <= newOffset ? 'forward' : 'backward';

    setScrollState({ scrollOffset: newOffset, scrollDirection: newScrollDirection });
  }, [scrollState]);

  return [scrollState, onScroll] as const;
}

export default useVirtualScroll;
