/** @type {import('tailwindcss').Config} */
const { palette } = require('./src/palette');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:palette
    },
  },
  plugins: [],
}