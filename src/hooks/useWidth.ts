import { useEffect, useState } from "react";

type DeviceType = 'mobile' | 'tablet' | 'desktop';


interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  device: DeviceType;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1024
} as const;

export function useScreenSizeDebounced(delay: number = 100): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window === 'undefined') {
      return {
        width: 1024,
        height: 768,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        device: 'desktop'
      };
    }

    return getScreenSize(window.innerWidth, window.innerHeight);
  });

  function getScreenSize(width: number, height: number): ScreenSize {
    const isMobile = width < BREAKPOINTS.mobile;
    const isTablet = width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;
    const isDesktop = width >= BREAKPOINTS.desktop;
    
    let device: DeviceType;
    if (isMobile) device = 'mobile';
    else if (isTablet) device = 'tablet';
    else device = 'desktop';
  
    return {
      width,
      height,
      isMobile,
      isTablet,
      isDesktop,
      device
    };
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize(getScreenSize(window.innerWidth, window.innerHeight));
      }, delay);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return screenSize;
}