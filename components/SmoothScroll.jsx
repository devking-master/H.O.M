'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis;
    let tickerUpdate;

    async function initLenis() {
      const Lenis = (await import('lenis')).default;
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      tickerUpdate = (time) => {
        lenis.raf(time * 1000);
      };

      // Connect Lenis to GSAP's ticker
      gsap.ticker.add(tickerUpdate);
      gsap.ticker.lagSmoothing(0);
    }

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      if (tickerUpdate) {
        import('gsap').then((gsapModule) => {
          gsapModule.default.ticker.remove(tickerUpdate);
        });
      }
    };
  }, []);

  return <>{children}</>;
}
