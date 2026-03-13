import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        alabaster: '#F9F8F6',
        champagne: '#D4AF9F',
        'charcoal-dark': '#0F0F0F',
        'charcoal-light': '#2D2D2D',
        'muted-text': '#B8B8B8',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: 'clamp(2.5rem, 6vw, 4rem)',
        h2: 'clamp(2rem, 4vw, 3rem)',
        h3: 'clamp(1.5rem, 2.5vw, 2rem)',
        h4: '1.25rem',
        'body-lg': '1.125rem',
        'body-base': '1rem',
        'body-sm': '0.875rem',
        'body-xs': '0.8125rem',
      },
      spacing: {
        'section-mobile': '2rem',
        'section-tablet': '3rem',
        'section-desktop': '4rem',
      },
      borderRadius: {
        sm: '0.375rem',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
        md: '0 4px 12px rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        section: '1200px',
        prose: '800px',
        form: '600px',
        card: '350px',
      },
    },
  },
  plugins: [],
};

export default config;
