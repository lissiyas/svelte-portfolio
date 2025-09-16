import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1D5D9B', // A deep blue (you can change this)
        'secondary': '#1d4ed8',
        'light-bg': '#f3f4f6', // Light gray for backgrounds
        'dark-text': '#111827', // Dark gray for text
        'medium-text': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // A clean, modern font
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} satisfies Config