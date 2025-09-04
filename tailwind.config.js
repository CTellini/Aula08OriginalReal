/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Azul Elétrico / Cobalto (Enhanced)
        primary: {
          '50': '#EAF0FF',
          '100': '#D4E1FF',
          '200': '#B3CCFF',
          '300': '#85AAFF',
          '400': '#3A75FF',
          '500': '#0057FF', // Cor principal
          '600': '#0047D6',
          '700': '#0038AD',
          '800': '#002D88',
          '900': '#001F5C',
          '950': '#001233',
        },
        // Secondary - Roxo Profundo (Enhanced)
        secondary: {
          '50': '#F3F0FF',
          '100': '#E9E3FF',
          '200': '#D6CCFF',
          '300': '#B8A3FF',
          '400': '#7C3AED',
          '500': '#4B00B7', // Cor secundária
          '600': '#3A0094',
          '700': '#2D0071',
          '800': '#20004F',
          '900': '#15002E',
        },
        // Accent - Verde Neon Suave (Enhanced)
        accent: {
          '50': '#EAFFF7',
          '100': '#D1FFED',
          '200': '#A8FFDC',
          '300': '#70FFC4',
          '400': '#00FFAA',
          '500': '#00D18C', // Cor de destaque
          '600': '#00A86B',
          '700': '#008554',
          '800': '#006B44',
          '900': '#005637',
        },
        // Dark - Tons escuros profissionais (Enhanced)
        dark: {
          '50': '#F8F8F8',
          '100': '#F0F0F0',
          '200': '#E4E4E4',
          '300': '#D1D1D1',
          '400': '#B4B4B4',
          '500': '#9A9A9A',
          '600': '#818181',
          '700': '#6A6A6A',
          '800': '#1A1A1A',
          '900': '#111111',
          '950': '#0B0B0B',
        },
        // Success, Warning, Error
        success: {
          '400': '#63D471',
          '500': '#22C55E',
          '600': '#16A34A',
        },
        warning: {
          '400': '#F5C244',
          '500': '#EAB308',
          '600': '#CA8A04',
        },
        error: {
          '400': '#F87171',
          '500': '#E74C3C',
          '600': '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'text-reveal': 'text-reveal 2s ease-in-out infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'loading-bounce': 'loading-bounce 1.4s ease-in-out infinite both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(58, 117, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(58, 117, 255, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'text-reveal': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '1' },
        },
        'loading-bounce': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(58, 117, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(58, 117, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(58, 117, 255, 0.5)',
        'accent-glow': '0 0 20px rgba(0, 255, 170, 0.3)',
        'accent-glow-lg': '0 0 40px rgba(0, 255, 170, 0.4)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.5)',
        },
        '.backdrop-blur-safari': {
          '-webkit-backdrop-filter': 'blur(10px)',
          'backdrop-filter': 'blur(10px)',
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};