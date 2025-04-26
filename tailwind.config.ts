import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Оставляем цвета в явном виде (из-за недоработки tailwind)
      colors: {
        primary: '#5DD241',
        cyan: '#005D6E',
        teal: '#07ADA7',
        blue: '#68DFF2',
        gray: {
          DEFAULT: '#8F8F8F',
          dark: '#353535',
          light: '#F3F3F3',
        },
        yellow: '#FFBF20',
        foreground: '#353535',
        border: '#B3B3B3',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1500px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
