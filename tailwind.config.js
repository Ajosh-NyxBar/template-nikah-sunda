/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sunda: {
          green: '#1B5E20',
          'green-light': '#2E7D32',
          'green-soft': '#4CAF50',
          gold: '#C9A84C',
          'gold-light': '#DFC06D',
          'gold-dark': '#A68B3A',
          cream: '#FDF8F0',
          'cream-dark': '#F5EDE0',
          brown: '#3E2723',
          'brown-light': '#5D4037',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      keyframes: {
        'sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) rotate(360deg)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bloom': {
          '0%': { transform: 'scale(0) rotate(-45deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'sway': 'sway 4s ease-in-out infinite',
        'float-up': 'float-up 10s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out',
        'bloom': 'bloom 1s ease-out',
      },
    },
  },
  plugins: [],
}
