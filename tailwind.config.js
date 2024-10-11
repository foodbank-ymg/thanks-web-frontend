/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#EFD950',
        provider: '#D7602D',
        grocery: '#51A749',
      },
      fontFamily: {
        zenmaru: ['"Zen Maru Gothic"'],
      },
      borderRadius: {
        common: '5vw',
        cardoutl: '2.25vw',
        cardouts: '5vw',
        cardinl: '1.5vw',
        cardins: '3vw',
      },
      maxWidth: {
        main: '1280px',
      },
      padding: {
        common: '3vw',
      },
    },
    backgroundImage: {},
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '60%': '60%',
      16: '4rem',
    },
  },
  variants: {},
  plugins: [],
}
