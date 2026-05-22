import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#243137',
          90: 'rgba(36, 49, 55, 0.9)',
          70: 'rgba(36, 49, 55, 0.7)',
        },
        red: {
          DEFAULT: '#DE3E40',
          hover: '#C9383A',
        },
        cream: '#FAF7F2',
        stone: {
          100: '#F5F2ED',
          300: '#D6D1C8',
          600: '#6B6660',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      fontSize: {
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      lineHeight: {
        relaxed: '1.7',
      },
      maxWidth: {
        prose: '65ch',
      },
      letterSpacing: {
        widest: '0.18em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out',
        'slide-down': 'slide-down 200ms ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
