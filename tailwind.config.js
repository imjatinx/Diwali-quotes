/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '640px' },
        'xxs': { 'max': '532px' }
      },
      backgroundImage: {
        'quotebg': "url('./Assests/quote_bg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}