'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Music, HeartHandshake, Zap, Smile, Video, ArrowRight } from 'lucide-react';

const featuredDepts = [
  {
    id: 'media',
    name: 'Media Department',
    slug: 'media',
    description: 'Serving through photography, graphics design, and sound & projection engineering.',
    color: '#3b82f6',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'choir',
    name: 'Choir Department',
    slug: 'choir',
    description: 'Lifting voices in praise and worship, setting the atmosphere for encounters with God.',
    color: '#06b6d4',
    icon: Music,
    image: '/choir.jpg',
  },
  {
    id: 'usher',
    name: 'Usher Department',
    slug: 'usher',
    description: 'Welcoming guests, helping with seating, and coordinating services to ensure hospitality.',
    color: '#6366f1',
    icon: HeartHandshake,
    image: '/usher.jpg',
  },
  {
    id: 'children',
    name: 'Children Ministry',
    slug: 'children',
    description: 'Nurturing faith in our little ones through creative Bible storytelling, fun activities, and love.',
    color: '#f59e0b',
    icon: Smile,
    image: '/children.jpg',
  },
];

export default function FeaturedDepartments() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    let ctx;
    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Heading reveal
        gsap.from(headingRef.current?.querySelectorAll('.anim-item') ?? [], {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          stagger: 0.12,
          ease: 'power3.out',
        });

        // Bento cards stagger
        const cards = gridRef.current?.querySelectorAll('.bento-card') ?? [];
        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            end: 'top 20%',
            scrub: 1.5,
          },
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: { each: 0.08, from: 'start' },
          ease: 'back.out(1.2)',
        });
      }, sectionRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="departments-featured"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) 1.5rem',
        background: 'var(--bg-2)',
        transition: 'background 0.5s ease',
      }}
    >
      <div className="section-wrap">
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: '3rem' }}>
          <p className="label anim-item" style={{ marginBottom: '1rem' }}>
            Featured Departments
          </p>
          <h2
            className="anim-item"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--fg)',
              maxWidth: '600px',
              transition: 'color 0.5s ease',
            }}
          >
            Find a place{' '}
            <span className="gradient-text">to serve & grow.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '1.25rem',
          }}
          className="bento-responsive"
        >
          {/* Featured Department Card — spans 2 cols (Youth Department) */}
          <div
            className="bento-card group"
            style={{
              gridColumn: 'span 2',
              background: 'linear-gradient(135deg, #0f0b2a 0%, #1e133e 50%, #0a061a 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(167, 139, 250, 0.25)',
              transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.012)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(167, 139, 250, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {/* Background image with overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                opacity: 0.8,
                transition: 'opacity 0.4s ease, scale 0.6s ease',
              }}
              className="group-hover:opacity-40 group-hover:scale-105"
            >
              <Image
                src="/youthmember.jpg"
                alt="Youth Department"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div 
              style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(10, 6, 26, 0.8) 20%, rgba(10, 6, 26, 0.4) 100%)',
                zIndex: 1 
              }} 
            />

            {/* Background glow orb */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(ellipse 60% 60% at 75% 35%, rgba(167, 139, 250, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(167, 139, 250, 0.15)',
                    border: '1px solid rgba(167, 139, 250, 0.3)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc',
                  }}
                >
                  <Zap className="h-4.5 w-4.5" />
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#c084fc',
                  }}
                >
                  Active Youth Generation
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                Youth Department
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.975rem',
                  fontWeight: 400,
                  maxWidth: '520px',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}
              >
                Empowering the next generation to live with passion, purpose, and unshakeable faith through dynamic fellowship, leadership, and outreach.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link
                  href="/departments/youth"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.5rem',
                    background: '#a78bfa',
                    color: '#0f0b2a',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    borderRadius: '980px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#c084fc';
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#a78bfa';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Department card: Media */}
          <DepartmentCard dept={featuredDepts[0]} />

          {/* Department cards row 2 */}
          {featuredDepts.slice(1).map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .bento-responsive {
            grid-template-columns: 1fr !important;
          }
          .bento-responsive > div:first-child {
            grid-column: span 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .bento-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      ` }} />
    </section>
  );
}

function DepartmentCard({ dept }) {
  const IconComponent = dept.icon;
  return (
    <div
      className="bento-card card group relative overflow-hidden flex flex-col justify-between"
      style={{ padding: '0', border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}
    >
      {/* Visual Image Area (Top half) */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={dept.image}
          alt={dept.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating icon */}
        <span
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.25rem',
            width: '38px',
            height: '38px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <IconComponent className="h-4.5 w-4.5" />
        </span>
      </div>

      {/* Content Area (Bottom half) */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5" style={{ background: 'transparent' }}>
        <div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: '1.15rem',
              color: 'var(--fg)',
              letterSpacing: '-0.02em',
              marginBottom: '0.4rem',
              transition: 'color 0.5s ease',
            }}
          >
            {dept.name}
          </h3>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--fg-2)',
              lineHeight: 1.55,
              transition: 'color 0.5s ease',
            }}
          >
            {dept.description}
          </p>
        </div>

        <div style={{ display: 'flex', width: '100%' }}>
          <Link
            href={`/departments/${dept.slug}`}
            className="btn-ghost w-full justify-center text-xs py-2 px-4 group/btn"
            style={{
              color: dept.color,
              borderColor: `${dept.color}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = dept.color;
              e.currentTarget.style.borderColor = dept.color;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '';
              e.currentTarget.style.borderColor = `${dept.color}40`;
              e.currentTarget.style.color = dept.color;
            }}
          >
            Learn More <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
