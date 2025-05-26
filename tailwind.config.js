/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f6',
          100: '#e6e7ea',
          200: '#c6c9cf',
          300: '#a6aab4',
          400: '#868c9a',
          500: '#666d7f',
          600: '#525766',
          700: '#3d414d',
          800: '#292b33',
          900: '#14151a',
          950: '#0a0a0d',
        },
        accent: {
          50: '#fbf7f0',
          100: '#f8efe0',
          200: '#f1dec2',
          300: '#e9cda3',
          400: '#e2bc85',
          500: '#daab66',
          600: '#d29a47',
          700: '#c58729',
          800: '#a5721f',
          900: '#845c18',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};