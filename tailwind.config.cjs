/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      lato: ['Lato'],
      oswald: ['Oswald'],
    },
  },
  plugins: [require('daisyui')],

  // daisy config
  daisyui: {
    base: false,
  },
};
