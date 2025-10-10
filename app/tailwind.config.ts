import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Barvy podle požadavků klienta: Zlatá, Béžová, Bílá, Černá
      colors: {
        // Hlavní barvy
        'brand-primary': {
          light: '#f7f4e1', // Světlá zlatá
          DEFAULT: '#d4af37', // Zlatá
          dark: '#aa8c2c',  // Tmavší zlatá
        },
        'brand-secondary': {
          light: '#f1ede6', // Světlá béžová
          DEFAULT: '#e6ccb2', // Střední nude/béžová
          dark: '#c9a689',  // Tmavší nude/béžová
        },
        'brand-gold': {
          light: '#f7f4e1', // Světlá zlatá
          DEFAULT: '#d4af37', // Zlatá
          dark: '#aa8c2c',  // Tmavší zlatá
        },
        'brand-black': '#121212',
        'brand-white': '#ffffff',
        // Zachováme původní názvy pro zpětnou kompatibilitu
        'brand-pink': {
          light: '#f7f4e1', // Světlá zlatá
          DEFAULT: '#d4af37', // Zlatá
          dark: '#aa8c2c',  // Tmavší zlatá
        },
        'brand-rose': {
          light: '#f1ede6', // Světlá béžová
          DEFAULT: '#e6ccb2', // Střední nude/béžová
          dark: '#c9a689',  // Tmavší nude/béžová
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Nastavení fontů
      fontFamily: {
        sans: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'], // Primární font pro texty (simulace "Bison")
        serif: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'], // Nadpisy i prvky označené jako serif nyní používají Bebas Neue
      },
      // Vlastní animace
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        flow: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '1000' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
          '100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        scaleX: 'scaleX 1.5s ease-in-out forwards',
        slideUp: 'slideUp 1s ease-in-out forwards',
        slideDown: 'slideDown 1s ease-in-out forwards',
        slideInLeft: 'slideInLeft 1s ease-in-out forwards',
        slideInRight: 'slideInRight 1s ease-in-out forwards',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        flow: 'flow 15s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const animationDelayUtilities = {};
      for (let i = 1; i <= 20; i++) {
        animationDelayUtilities[`.${e(`animation-delay-${i * 100}`)}`] = {
          'animation-delay': `${i * 100}ms`,
        };
      }
      addUtilities(animationDelayUtilities, ['responsive']);
    },
  ],
};
export default config;
