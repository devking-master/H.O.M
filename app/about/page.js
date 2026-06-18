'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import dynamic from 'next/dynamic';

const VisionSection = dynamic(() => import('@/components/VisionSection'), { ssr: true });
const LeadershipScroll = dynamic(() => import('@/components/LeadershipScroll'), { ssr: false });
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="bg-bg">
        <Nav />
        
        {/* Simple Hero for About */}
        <section className="relative overflow-hidden bg-bg pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="section-wrap relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            >
              <h1 className="text-fluid-h1 font-black tracking-tighter text-fg">
                The House of <span className="gradient-text">Mercy.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-fg-2 md:text-2xl">
                A community built on the foundations of grace, truth, and radical hospitality.
              </p>
            </motion.div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 blur-[100px]">
            <div className="h-[400px] w-[600px] rounded-full bg-accent/10" />
          </div>
        </section>

        <VisionSection />
        <LeadershipScroll />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
