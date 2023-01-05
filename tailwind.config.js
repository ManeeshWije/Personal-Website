/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./pages/*.{js,ts,jsx,tsx}', './pages/*/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animationDuration: {
        '2s': '2s',
      },
      screens: {
        phone: '500px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
