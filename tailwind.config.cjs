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
    colors: {
      themePrimary: {
        100: '#f3e8ff',
        200: '#dbbdfc',
        300: '#c393f6',
        400: '#ab6ded',
        500: '#954ee1',
        600: '#8036d0',
        700: '#6d23bb',
        800: '#5b169f',
        900: '#490d7e',
        1000: '#360759',
        1100: '#1e1026',
      },
    },
  },
  plugins: [require('daisyui')],

  // daisy config
  daisyui: {
    base: false,
  },
};
