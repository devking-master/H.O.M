'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const crossRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollCueRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const gsap = (await import('gsap')).default;

      ctx = gsap.context(() => {
        // Initial state
        gsap.set([headlineRef.current, subRef.current, ctaRef.current, scrollCueRef.current], {
          opacity: 0,
          y: 30,
        });
        gsap.set(crossRef.current, {
          opacity: 0,
          scale: 0.6,
          filter: 'blur(20px)',
        });

        // Entrance timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 });

        tl.to(crossRef.current, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'expo.out',
        })
          .to(
            headlineRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            '-=0.9'
          )
          .to(
            subRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            '-=0.5'
          )
          .to(
            ctaRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
            },
            '-=0.4'
          )
          .to(
            scrollCueRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            '-=0.2'
          );
      }, heroRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(var(--accent-rgb, 0,113,227), 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.5s ease',
        }}
      />

      {/* Particle dots */}
      <ParticleField />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Logo Image instead of Icon */}
        <div ref={crossRef} className="float-anim cross-glow" style={{ marginBottom: '2.5rem', position: 'relative', width: '180px', height: '180px' }}>
          <Image
            src="/church-logo.png"
            alt="H.O.M"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Label */}
        <p
          className="label"
          style={{ marginBottom: '1.2rem', letterSpacing: '0.14em' }}
        >
          Every Sunday · 10:00 AM
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="fluid-headline"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.04,
            color: 'var(--fg)',
            marginBottom: '1.5rem',
            transition: 'color 0.5s ease',
          }}
        >
          Experience{' '}
          <span className="gradient-text">Faith,</span>
          <br />
          Redefined.
        </h1>

        {/* Sub-text */}
        <p
          ref={subRef}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'var(--fg-2)',
            maxWidth: '540px',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
            fontWeight: 400,
            transition: 'color 0.5s ease',
          }}
        >
          A community rooted in love, guided by purpose, and living in the fullness of grace. You belong here.
        </p>

        {/* CTA row */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            gap: '0.875rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link href="/departments#join" id="hero-cta-live" className="btn-primary">
            <span
              style={{
                width: '8px',
                height: '8px',
                background: 'var(--accent)',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            Join a Department
          </Link>
          <Link href="#community" id="hero-cta-community" className="btn-ghost">
            Our Community →
          </Link>
        </div>

        {/* Service time badge */}
        <div
          style={{
            marginTop: '3rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'var(--card-bg)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--card-border)',
            borderRadius: '40px',
            padding: '0.6rem 1.2rem',
            fontSize: '0.875rem',
            color: 'var(--fg-2)',
            fontWeight: 500,
            transition: 'all 0.5s ease',
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>📍</span>
          <span>123 Grace Avenue, Lagos · All are welcome!</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <ScrollArrow />
      </div>
    </section>
  );
}

/* ── Particle field ─────────────────────────────────────── */
function ParticleField() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
    opacity: Math.random() * 0.4 + 0.05,
  }));

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'var(--accent)',
            opacity: p.opacity,
            animationName: 'floatY',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ))}
    </div>
  );
}

/* ── Scroll arrow ───────────────────────────────────────── */
function ScrollArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="var(--fg-2)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ animation: 'floatY 2s ease-in-out infinite' }}
    >
      <line x1="9" y1="3" x2="9" y2="15" />
      <polyline points="4,10 9,15 14,10" />
    </svg>
  );
}
