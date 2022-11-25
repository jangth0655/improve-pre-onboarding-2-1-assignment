/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      gray: '#D9D9D9',
      blue: '#0094FF',
      white: 'rgb(255 255 255)',
    },
    extend: {},
  },
  plugins: [],
};
