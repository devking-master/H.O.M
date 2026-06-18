'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { 
  Music, 
  HeartHandshake, 
  Zap, 
  Smile, 
  Video, 
  ArrowRight
} from 'lucide-react';

const departments = [
  {
    id: 'choir',
    name: 'Choir Department',
    slug: 'choir',
    icon: Music,
    color: '#06b6d4',
    image: '/choir.jpg',
    description: 'Lifting voices in praise and worship, setting the atmosphere for encounters with God. Open to singers and instrumentalists passionate about music ministry.',
    leader: 'Mummy Ewa',
  },
  {
    id: 'usher',
    name: 'Usher Department',
    slug: 'usher',
    icon: HeartHandshake,
    color: '#6366f1',
    image: '/usher.jpg',
    description: 'Welcoming guests, helping with seating, and coordinating services to ensure everyone experiences hospitality and order at House of Mercy.',
    leader: 'Brig. Dayo',
  },
  {
    id: 'youth',
    name: 'Youth Department',
    slug: 'youth',
    icon: Zap,
    color: '#a78bfa',
    image: '/youth.jpg',
    description: 'Empowering the next generation to live with passion, purpose, and unshakeable faith through dynamic gatherings, small groups, and community service.',
    leader: 'Brig. Samuel',
  },
  {
    id: 'children',
    name: 'Children Ministry',
    slug: 'children',
    icon: Smile,
    color: '#f59e0b',
    image: '/children.jpg',
    description: 'Nurturing faith in our little ones through creative Bible storytelling, fun activities, and love. Creating a safe space for kids to learn about Jesus.',
    leader: 'Woli. Grace',
  },
  {
    id: 'media',
    name: 'Media Department',
    slug: 'media',
    icon: Video,
    color: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    description: 'Broadcasting the Gospel creatively. Managing live sound, lighting, photography, graphics design, and social media platforms.',
    leader: 'Brother Tobi',
  },
];

export default function DepartmentsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
  };

  return (
    <SmoothScroll>
      <main className="bg-bg min-h-screen">
        <Nav />

        {/* ── Hero Section ────────────────────────────────── */}
        <section className="relative overflow-hidden bg-bg pt-32 pb-20 md:pt-48 md:pb-32 transition-colors duration-500">
          <div className="section-wrap relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-fluid-h1 font-black tracking-tighter text-fg leading-none">
                Serve Through a <span className="gradient-text">Department.</span>
              </h1>
              <p className="mt-6 text-xl font-medium text-fg-2 md:text-2xl leading-relaxed">
                Become actively involved in church life. Discover your gifts, connect with others, and serve the community in one of our five core areas of ministry.
              </p>
            </motion.div>
          </div>
          {/* Decorative glow */}
          <div aria-hidden="true" className="absolute inset-0 z-0 flex items-center justify-center opacity-30 blur-[120px] pointer-events-none">
            <div className="h-[350px] w-[500px] rounded-full bg-accent/20" />
          </div>
        </section>

        {/* ── Overview Section ────────────────────────────── */}
        <section className="bg-bg-2 py-16 border-t border-border transition-colors duration-500">
          <div className="section-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <p className="label mb-3">Community First</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl leading-tight">
                  Servant Hearts, <br />United Purpose.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg text-fg-2 leading-relaxed">
                  We believe that church is not a place you just attend, but a family you build together. By serving in a department, you contribute directly to the spiritual growth and smooth operation of our fellowship. No matter your background or skillset, there is a place for you to shine and make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Department Grid Section ──────────────────────── */}
        <section className="py-24 bg-bg transition-colors duration-500">
          <div className="section-wrap">
            <div className="mb-16">
              <p className="label mb-4">Discover Your Fit</p>
              <h2 className="text-4xl font-black tracking-tight text-fg md:text-5xl">Explore Our 5 Core Departments</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {departments.map((dept) => {
                const IconComponent = dept.icon;
                return (
                  <motion.div
                    key={dept.id}
                    variants={cardVariants}
                    className="card group relative flex flex-col justify-between overflow-hidden"
                    style={{ padding: '0' }}
                  >
                    {/* Visual Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={dept.image}
                        alt={dept.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      {/* Department Icon */}
                      <span
                        className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          color: '#fff',
                        }}
                      >
                        <IconComponent className="h-5 w-5" />
                      </span>
                    </div>
                    
                    {/* Content area */}
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="text-2xl font-bold tracking-tight text-fg mb-3 transition-colors duration-300 group-hover:text-accent">
                          {dept.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-fg-2 text-sm leading-relaxed mb-6">
                          {dept.description}
                        </p>
                      </div>

                      {/* Footer Area */}
                      <div className="border-t border-border pt-5 flex flex-col gap-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-fg-3" />
                          <p className="text-xs font-semibold text-fg-2">
                            Leader: <span className="text-fg">{dept.leader}</span>
                          </p>
                        </div>

                        {/* Button Row */}
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          <Link
                            href={`/departments/${dept.slug}`}
                            className="btn-ghost justify-center text-xs py-2 px-3"
                            style={{
                              color: 'var(--fg-2)',
                              borderColor: 'var(--glass-border)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'var(--bg-3)';
                              e.currentTarget.style.color = 'var(--fg)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '';
                              e.currentTarget.style.color = 'var(--fg-2)';
                            }}
                          >
                            Learn More
                          </Link>
                          <Link
                            href={`/departments/${dept.slug}#join`}
                            className="btn-primary justify-center text-xs py-2 px-3"
                            style={{
                              background: dept.color,
                              color: '#fff',
                              boxShadow: `0 4px 15px ${dept.color}30`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.03)';
                              e.currentTarget.style.boxShadow = `0 8px 25px ${dept.color}45`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = '';
                              e.currentTarget.style.boxShadow = `0 4px 15px ${dept.color}30`;
                            }}
                          >
                            Join Dept
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Call To Action Section ──────────────────────── */}
        <section
          style={{
            padding: 'clamp(5rem, 8vw, 8rem) 1.5rem',
            background: 'linear-gradient(135deg, #090915 0%, #0d1222 50%, #000000 100%)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <div className="section-wrap relative z-10">
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              Ready to take the next step?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}>
              Explore a department and see how your involvement can shape the worship, ministry, and growth of our church.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link
                href="/departments/youth#join"
                className="btn-primary"
                style={{
                  padding: '0.85rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                }}
              >
                Apply to Join a Department
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
