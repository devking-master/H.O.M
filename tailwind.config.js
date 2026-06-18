/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        'bg-3': 'var(--bg-3)',
        fg: 'var(--fg)',
        'fg-2': 'var(--fg-2)',
        'fg-3': 'var(--fg-3)',
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent)', // Both handled by CSS variable
        },
        apple: {
          black: '#1D1D1F',
          gray: '#6E6E73',
          'gray-2': '#86868B',
          'off-white': '#F5F5F7',
          'light-gray': '#F2F2F2',
        },
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 8vw, 8rem)',
        'fluid-h2': 'clamp(2rem, 5vw, 5rem)',
        'fluid-h3': 'clamp(1.5rem, 3vw, 3rem)',
        'fluid-body': 'clamp(1rem, 2vw, 1.25rem)',
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(ellipse at center, #0071E320 0%, transparent 70%)',
        'glow-radial-dark': 'radial-gradient(ellipse at center, #2997FF20 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, #0071E315, transparent)',
        'hero-gradient-dark': 'radial-gradient(ellipse 80% 50% at 50% -20%, #2997FF20, transparent)',
        'blue-gradient': 'linear-gradient(135deg, #0071E3 0%, #5AC8FA 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8973A 0%, #E8C97A 50%, #C8973A 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'draw': 'draw 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.06)',
        'card-dark': '0 2px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover-dark': '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.10)',
        'blue-glow': '0 0 40px rgba(0, 113, 227, 0.3)',
        'blue-glow-dark': '0 0 40px rgba(41, 151, 255, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'apple-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
