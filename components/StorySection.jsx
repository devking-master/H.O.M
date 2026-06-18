'use client';

import { useEffect, useRef } from 'react';

const members = [
  { id: 1, name: 'Mummy Ewa', role: 'Choir Master', emoji: '🎵', color: '#ff6b6b' },
  { id: 2, name: 'Brig. Samuel', role: 'Youth Leader', emoji: '⚡', color: '#4ecdc4' },
  { id: 3, name: 'Brig. Dayo', role: 'Brigade Leader', emoji: '👮', color: '#a78bfa' },
  { id: 5, name: 'David', role: 'Tech Team', emoji: '💻', color: '#0071e3' },
  { id: 6, name: 'Woli. Grace', role: 'Children\'s Ministry', emoji: '🌸', color: '#f06292' },
];

const missionPoints = [
  { icon: '✦', title: 'Worship', desc: 'Authentic, Spirit-led worship that transcends culture and connects hearts.' },
  { icon: '✦', title: 'Grow', desc: 'Biblical teaching that transforms minds and builds unshakeable faith.' },
  { icon: '✦', title: 'Serve', desc: 'Hands-on community impact that brings hope to every corner of Lagos.' },
];

export default function StorySection() {
  const sectionRef = useRef(null);
  const communityTextRef = useRef(null);
  const membersRef = useRef(null);
  const bridgeRef = useRef(null);
  const missionTextRef = useRef(null);
  const missionListRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ── Community text reveal ──────────────────────────────
        gsap.from(communityTextRef.current?.querySelectorAll('.anim-item') ?? [], {
          scrollTrigger: {
            trigger: communityTextRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          opacity: 0,
          y: 60,
          stagger: 0.15,
          ease: 'power3.out',
        });

        // ── Member cards stagger ───────────────────────────────
        gsap.from(membersRef.current?.querySelectorAll('.member-card') ?? [], {
          scrollTrigger: {
            trigger: membersRef.current,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 1.2,
          },
          opacity: 0,
          y: 80,
          scale: 0.85,
          stagger: 0.08,
          ease: 'back.out(1.4)',
        });

        // ── Bridge text ────────────────────────────────────────
        gsap.from(bridgeRef.current, {
          scrollTrigger: {
            trigger: bridgeRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 0,
          scale: 0.95,
          ease: 'power2.out',
        });

        // ── Mission heading ────────────────────────────────────
        gsap.from(missionTextRef.current?.querySelectorAll('.anim-item') ?? [], {
          scrollTrigger: {
            trigger: missionTextRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
          opacity: 0,
          x: -50,
          stagger: 0.15,
          ease: 'power3.out',
        });

        // ── Mission cards ──────────────────────────────────────
        gsap.from(missionListRef.current?.querySelectorAll('.mission-card') ?? [], {
          scrollTrigger: {
            trigger: missionListRef.current,
            start: 'top 85%',
            end: 'top 25%',
            scrub: 1.2,
          },
          opacity: 0,
          y: 60,
          stagger: 0.12,
          ease: 'power3.out',
        });

        // ── Stats counter ──────────────────────────────────────
        gsap.from(statsRef.current?.querySelectorAll('.stat-item') ?? [], {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.8,
          },
          opacity: 0,
          y: 40,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }, sectionRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="community" ref={sectionRef}>

      {/* ── Block 1: Our Community ────────────────────────── */}
      <div
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) 1.5rem',
          background: 'var(--bg)',
          transition: 'background 0.5s ease',
        }}
      >
        <div className="section-wrap">
          {/* Section header */}
          <div ref={communityTextRef} style={{ marginBottom: '4rem' }}>
            <p className="label anim-item" style={{ marginBottom: '1rem' }}>
              Our Community
            </p>
            <h2
              className="anim-item"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: 'var(--fg)',
                maxWidth: '650px',
                transition: 'color 0.5s ease',
              }}
            >
              Thousands of lives,{' '}
              <span className="gradient-text">one family.</span>
            </h2>
            <p
              className="anim-item"
              style={{
                marginTop: '1.5rem',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--fg-2)',
                maxWidth: '520px',
                lineHeight: 1.7,
                transition: 'color 0.5s ease',
              }}
            >
              From students to executives, artists to engineers — we are a church with no walls. Every story matters. Every voice is heard.
            </p>
          </div>

          {/* Member cards */}
          <div
            ref={membersRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem',
              marginBottom: '5rem',
            }}
          >
            {members.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { number: '5,000+', label: 'Members & growing' },
              { number: '12', label: 'Community branches' },
              { number: '8 yrs', label: 'Of faithful service' },
              { number: '100+', label: 'Nations represented' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="stat-item"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--card-border)',
                  transition: 'background 0.5s ease, border 0.5s ease',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--fg-2)',
                    fontWeight: 500,
                    transition: 'color 0.5s ease',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bridge Quote ──────────────────────────────────── */}
      <div
        ref={bridgeRef}
        style={{
          padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
          background: 'linear-gradient(160deg, rgba(var(--accent-rgb,0,113,227),0.08) 0%, var(--bg) 60%)',
          textAlign: 'center',
          transition: 'background 0.5s ease',
        }}
      >
        <div className="section-wrap">
          <blockquote
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.35,
              color: 'var(--fg)',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
              transition: 'color 0.5s ease',
            }}
          >
            "And let us consider how we may spur one another on toward love and good deeds."
          </blockquote>
          <cite
            style={{
              fontSize: '0.9rem',
              color: 'var(--fg-3)',
              fontStyle: 'normal',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Hebrews 10:24
          </cite>
        </div>
      </div>

      {/* ── Block 2: Our Mission ──────────────────────────── */}
      <div
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) 1.5rem',
          background: 'var(--bg)',
          transition: 'background 0.5s ease',
        }}
      >
        <div className="section-wrap">
          {/* Mission heading */}
          <div
            ref={missionTextRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'end',
              marginBottom: '3.5rem',
            }}
            className="grid-1-col-mobile"
          >
            <div>
              <p className="label anim-item" style={{ marginBottom: '1rem' }}>
                Our Mission
              </p>
              <h2
                className="anim-item"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  color: 'var(--fg)',
                  transition: 'color 0.5s ease',
                }}
              >
                Built to{' '}
                <span className="gradient-text">transform.</span>
              </h2>
            </div>
            <p
              className="anim-item"
              style={{
                fontSize: '1.1rem',
                color: 'var(--fg-2)',
                lineHeight: 1.75,
                paddingBottom: '0.5rem',
                transition: 'color 0.5s ease',
              }}
            >
              We exist to raise kingdom-citizens who worship authentically, grow continually, and serve impactfully — beginning in Lagos, extending to the ends of the earth.
            </p>
          </div>

          {/* Mission cards */}
          <div
            ref={missionListRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {missionPoints.map((mp, i) => (
              <MissionCard key={i} item={mp} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 640px) {
          .grid-1-col-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Member card ────────────────────────────────────────── */
function MemberCard({ member }) {
  return (
    <div
      className="member-card card"
      style={{
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        textAlign: 'center',
        cursor: 'default',
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: `${member.color}22`,
          border: `2px solid ${member.color}44`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
        }}
      >
        {member.emoji}
      </div>
      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: '0.95rem',
            color: 'var(--fg)',
            letterSpacing: '-0.01em',
            transition: 'color 0.5s ease',
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--fg-2)',
            marginTop: '0.2rem',
            fontWeight: 500,
            transition: 'color 0.5s ease',
          }}
        >
          {member.role}
        </div>
      </div>
    </div>
  );
}

/* ── Mission card ───────────────────────────────────────── */
function MissionCard({ item, index }) {
  const gradients = [
    'linear-gradient(135deg, #0071e3 0%, #5ac8fa 100%)',
    'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  ];

  return (
    <div
      className="mission-card card"
      style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Gradient corner */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: gradients[index],
          opacity: 0.12,
          filter: 'blur(20px)',
        }}
      />
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: gradients[index],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          marginBottom: '1.25rem',
          boxShadow: `0 4px 15px rgba(var(--accent-rgb,0,113,227),0.3)`,
        }}
      >
        {item.icon}
      </div>
      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: 'var(--fg)',
          marginBottom: '0.7rem',
          transition: 'color 0.5s ease',
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--fg-2)',
          lineHeight: 1.7,
          transition: 'color 0.5s ease',
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}
