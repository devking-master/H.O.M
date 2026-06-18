'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const leadership = [
  {
    id: 1,
    name: 'Rev. Dr. Olumide Koleoso',
    role: 'General Overseer',
    image: '/mummy.jpg',
  },
  {
    id: 2,
    name: 'Pastor Mrs. Adeola Koleoso',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Elder John Doe',
    role: 'Assisted Pastor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  },
];

const LeadershipCard = ({ member }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <motion.div
      ref={ref}
      className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-bg-3 shadow-md transition-all duration-700 ease-in-out"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image (Grayscale/Color) */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        animate={{
          filter: isInView ? 'grayscale(0%) blur(0px)' : 'grayscale(100%) blur(2px)',
          scale: isInView ? 1.05 : 1,
        }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Glassmorphic Name Tag */}
      <motion.div
        className="glass absolute bottom-6 left-6 right-6 z-20 flex flex-col items-center justify-center p-5 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <h3 className="text-lg font-bold tracking-tight text-fg">{member.name}</h3>
        <p className="text-sm font-medium text-accent">{member.role}</p>
      </motion.div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
    </motion.div>
  );
};

export default function LeadershipScroll() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="section-wrap">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Living Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-fluid-h2 font-black tracking-tighter"
          >
            Guided by <span className="gradient-text">Excellence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
