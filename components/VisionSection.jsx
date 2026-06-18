'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = "To raise a corporate people who will show forth God's praise, power, and glory in all spheres of life, transforming communities and nations through the unchanging word of truth and the power of the Holy Spirit.".split(" ");

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["var(--fg-3)", "var(--fg)"]);

  return (
    <span className="relative mr-3 lg:mr-5">
      <motion.span 
        style={{ opacity, color }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function VisionSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "end 0.2"]
  });

  return (
    <section ref={container} className="relative min-h-[150vh] bg-bg py-24">
      <div className="section-wrap sticky top-1/4">
        <div className="mb-12">
          <p className="label mb-6">Our Mission & Vision</p>
        </div>
        
        <h2 className="flex flex-wrap text-4xl font-bold leading-tight tracking-tight text-fg md:text-6xl lg:text-7xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word 
                key={i} 
                range={[start, end]} 
                progress={scrollYProgress}
              >
                {word}
              </Word>
            );
          })}
        </h2>

        <div className="mt-20">
          <div className="h-[1px] w-24 bg-accent" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-2 md:text-xl">
            At House of Mercy, we believe in the power of authentic community and radical transformation. 
            Our vision is to be a beacon of hope in a world that needs the light of Christ more than ever.
          </p>
        </div>
      </div>
    </section>
  );
}
