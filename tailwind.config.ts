import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 950:'#0a0804', 900:'#1a140d', 800:'#2a2015', 700:'#3a2c1d' },
        accent:  { 400:'#ca8a04', 500:'#d49a11', 600:'#e8b828', 300:'#fde047' },
        sand:    { DEFAULT:'#e8d5a3', dark:'#c9b07a', muted:'#8a7055' },
      },
      fontFamily: {
        heading: ['Scheherazade New', 'serif'],
        body:    ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
