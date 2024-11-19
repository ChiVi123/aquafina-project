/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        motherland: ['Motherland Signature', 'sans-serif']
      },
      colors: {
        primary: '#0036B4',
        icon: '#113A8A'
      }
    },
  },
  plugins: [],
}

