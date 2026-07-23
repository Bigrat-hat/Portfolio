/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        accent: '#4F7CFF',
        secondary: '#7C5CFF',
        textMain: 'rgb(var(--color-text-main) / <alpha-value>)',
        textMuted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        bgGlass: 'rgb(var(--color-bg-glass) / <alpha-value>)',
        borderGlass: 'rgb(var(--color-border-glass) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Satoshi', 'Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
