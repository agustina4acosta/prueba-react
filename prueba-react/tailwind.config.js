/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary:{
          light: '#FFA726',
          DEFAULT: '#FF9800',

        }
      }
    },
  },
  plugins: [],
}

