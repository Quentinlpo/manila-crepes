/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        righteous: ['Righteous', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}
