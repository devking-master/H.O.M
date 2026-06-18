'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GSAPInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      // Optional: Set default GSAP config
      gsap.config({
        nullTargetWarn: false,
      });
    }
  }, []);

  return null;
}
