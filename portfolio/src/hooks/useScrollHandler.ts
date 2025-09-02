import { useCallback, useEffect, useRef, useState } from 'react';

interface ScrollHandlerOptions {
  debounceMs?: number;
  throttleMs?: number;
}

export function useScrollHandler(
  callback: (scrollY: number, direction: 'up' | 'down') => void,
  options: ScrollHandlerOptions = {}
) {
  const { debounceMs = 0, throttleMs = 16 } = options;
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout>();
  const lastCallTime = useRef(0);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY.current ? 'down' : 'up';
    
    // Throttling
    if (throttleMs && now - lastCallTime.current < throttleMs) {
      return;
    }
    
    lastCallTime.current = now;
    
    // Debouncing
    if (debounceMs) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        callback(scrollY, direction);
        lastScrollY.current = scrollY;
      }, debounceMs);
    } else {
      callback(scrollY, direction);
      lastScrollY.current = scrollY;
    }
  }, [callback, debounceMs, throttleMs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId.current);
    };
  }, [handleScroll]);
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  
  useScrollHandler((y) => setScrollY(y), { throttleMs: 16 });
  
  return scrollY;
}
