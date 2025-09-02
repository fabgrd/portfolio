import { useEffect, useState } from 'react';

interface BreakpointOptions {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const defaultBreakpoints: Required<BreakpointOptions> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useResponsive(breakpoints: BreakpointOptions = {}) {
  const bp = { ...defaultBreakpoints, ...breakpoints };
  
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    function updateScreenSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isSm = width >= bp.sm;
      const isMd = width >= bp.md;
      const isLg = width >= bp.lg;
      const isXl = width >= bp.xl;
      
      setScreenSize({
        width,
        height,
        isSm,
        isMd,
        isLg,
        isXl,
        isMobile: width < bp.md,
        isTablet: width >= bp.md && width < bp.lg,
        isDesktop: width >= bp.lg,
      });
    }

    // Initial check
    updateScreenSize();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    function debouncedResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScreenSize, 150);
    }

    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [bp.sm, bp.md, bp.lg, bp.xl]);

  return screenSize;
}
