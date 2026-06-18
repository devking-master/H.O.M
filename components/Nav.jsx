'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '@/hooks/useDarkMode';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Departments', href: '/departments' },
  { label: 'Calendar', href: '/calendar' },
];

export default function Nav() {
  const { isDark, toggle, mounted } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  // Pages where the hero is a dark full-bleed image — nav needs a dark glass tint at rest
  const isDarkHero = pathname?.startsWith('/departments/') && pathname !== '/departments';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        id="main-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          transition: 'all 0.5s ease',
          background: scrolled
            ? 'var(--glass-bg)'
            : isDarkHero
            ? 'rgba(0, 0, 0, 0.35)'
            : 'transparent',
          backdropFilter: scrolled || isDarkHero ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled || isDarkHero ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--glass-border)'
            : isDarkHero
            ? '1px solid rgba(255,255,255,0.10)'
            : '1px solid transparent',
        }}
      >
        <div
          className="section-wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <div style={{ position: 'relative', width: '40px', height: '40px' }}>
              <Image
                src="/church-logo.png"
                alt="H.O.M Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: isDarkHero && !scrolled ? '#ffffff' : 'var(--fg)',
                transition: 'color 0.5s ease',
              }}
            >
              H.O.M
            </span>
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '2rem' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isDarkHero && !scrolled ? 'rgba(255,255,255,0.85)' : 'var(--fg-2)',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => (e.target.style.color = isDarkHero && !scrolled ? '#ffffff' : 'var(--fg)')}
                onMouseLeave={(e) => (e.target.style.color = isDarkHero && !scrolled ? 'rgba(255,255,255,0.85)' : 'var(--fg-2)')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Dark mode toggle */}
            {mounted && (
              <button
                id="theme-toggle"
                onClick={toggle}
                aria-label="Toggle dark mode"
                style={{
                  width: '44px',
                  height: '26px',
                  borderRadius: '13px',
                  border: '1.5px solid var(--glass-border)',
                  background: isDark
                    ? 'rgba(41,151,255,0.2)'
                    : 'rgba(0,113,227,0.07)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.5s ease',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: isDark ? 'calc(100% - 22px)' : '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    transition: 'left 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                  }}
                >
                  {isDark ? '🌙' : '☀️'}
                </span>
              </button>
            )}

            {/* CTA */}
            <Link
              href="/departments#join"
              id="nav-cta"
              className="btn-primary hidden md:inline-flex"
              style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
            >
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

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              id="mobile-menu-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isDarkHero && !scrolled ? '#ffffff' : 'var(--fg)',
                padding: '0.25rem',
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" />
                    <line x1="18" y1="4" x2="4" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="19" y2="6" />
                    <line x1="3" y1="12" x2="19" y2="12" />
                    <line x1="3" y1="18" x2="19" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden"
          style={{
            maxHeight: menuOpen ? '300px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: menuOpen ? '1px solid var(--glass-border)' : 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 1.5rem 1.5rem',
              gap: '1rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--fg)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/departments#join"
              className="btn-primary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                }}
              />
              Join a Department
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

