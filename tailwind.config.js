/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': 'var(--color-navbar)',
        'fondo': 'var(--color-fondo)',
        'texto': 'var(--color-texto)',
        'fondo-card': 'var(--color-fondo-card)',
        'fondo-card-links': 'var(--color-fondo-card-links)',
        'fondo-menu': 'var(--color-fondo-menu)',
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'], 
      },
    },
  },
  plugins: [],
}
