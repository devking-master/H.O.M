'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import FeaturedDepartments from '@/components/FeaturedDepartments';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background 0.5s ease' }}>
        <Nav />
        <Hero />
        <StorySection />
        <FeaturedDepartments />

        {/* ── Baptism / Join CTA Banner ────────────────────── */}
        <section
          id="give"
          style={{
            padding: 'clamp(5rem, 10vw, 10rem) 1.5rem',
            background: 'linear-gradient(135deg, #0071e3 0%, #003d80 50%, #0a0a1a 100%)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Background orbs */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: '-20%', left: '-10%',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(90,200,250,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
              marginBottom: '1.2rem',
            }}>
              Ready to take the next step?
            </p>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              Your story starts here.
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}>
              Whether you're new to faith or rediscovering it — there's a place for you at H.O.M.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="#"
                id="plan-visit-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  background: '#ffffff', color: '#0071e3',
                  fontSize: '0.95rem', fontWeight: 700,
                  borderRadius: '980px', textDecoration: 'none',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                Plan a Visit →
              </Link>
              {/* <Link
                href="#live"
                id="cta-watch-live"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  fontSize: '0.95rem', fontWeight: 600,
                  borderRadius: '980px',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                Watch Online
              </Link> */}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
