/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        FolderCards: 'repeat(auto-fit, minmax(150px, 1fr))',
        FolderCardsSm: 'repeat(auto-fit, minmax(80px, 1fr))',
        NotesListItems: '10% 90%',
      },
      dropShadow: {
        noteItems: '0 10px 10px rgb(195, 147, 246, .4)',
      },
    },
    fontFamily: {
      lato: ['Lato'],
      oswald: ['Oswald'],
      roboto: ['Roboto'],
      robotoLight: ['Roboto Light'],
      spaceGrotesk: ['Space Grotesk'],
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
        1050: '#23132c',
        1100: '#1e1026',
      },
      selectionColor: '#dbbdfc1e',
    },
  },
  plugins: [require('daisyui')],

  // daisy config
  daisyui: {
    base: false,
  },
};
