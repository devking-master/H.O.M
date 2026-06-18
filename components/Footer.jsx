'use client';

import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3.01 3.01 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3.01 3.01 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.01 3.01 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3.01 3.01 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--card-border)',
        padding: '4rem 1.5rem 3rem',
        transition: 'background 0.5s ease, border-color 0.5s ease',
      }}
    >
      <div className="section-wrap">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', width: '32px', height: '32px' }}>
                <Image
                  src="/church-logo.png"
                  alt="H.O.M Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--fg)',
                  transition: 'color 0.5s ease',
                }}
              >
                H.O.M
              </span>
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--fg-2)',
                lineHeight: 1.7,
                maxWidth: '240px',
                transition: 'color 0.5s ease',
              }}
            >
              A community rooted in love, guided by grace, and sent to the world. Join us every Sunday.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-3)',
                marginBottom: '1.25rem',
                transition: 'color 0.5s ease',
              }}
            >
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Sunday Service — 10:00 AM', 'Midweek Service — Wed 6:00 PM', 'Youth Service — Sat 4:00 PM', 'Prayer Meeting — Fri 5:00 AM'].map(
                (item) => (
                  <span
                    key={item}
                    style={{ fontSize: '0.9rem', color: 'var(--fg-2)', transition: 'color 0.5s ease' }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-3)',
                marginBottom: '1.25rem',
                transition: 'color 0.5s ease',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Ministries', href: '#' },
                { label: 'Departments', href: '/departments' },
                { label: 'Prayer Request', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--fg-2)',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--fg-2)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-3)',
                marginBottom: '1.25rem',
                transition: 'color 0.5s ease',
              }}
            >
              Location
            </h4>
            <address
              style={{
                fontSize: '0.9rem',
                color: 'var(--fg-2)',
                fontStyle: 'normal',
                lineHeight: 1.7,
                transition: 'color 0.5s ease',
              }}
            >
              123 Grace Avenue<br />
              Victoria Island, Lagos<br />
              Nigeria · 101001<br />
              <br />
              <a
                href="tel:+2348001234567"
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                +234 800 123 4567
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'var(--card-border)',
            marginBottom: '2rem',
            transition: 'background 0.5s ease',
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--fg-3)',
              transition: 'color 0.5s ease',
            }}
          >
            © 2026 H.O.M. All rights reserved. Built with faith &amp; love.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--fg-2)',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-2px)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-2)';
                  e.currentTarget.style.color = 'var(--fg-2)';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

