/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        myyellow: '#F5B42B',
        myyellowpale: '#FEF8EA',
        mypurple: '#601986',
        mybrown: '#660000',
        mygray: '#999999',
        mygraydark: '#707070',
        mywhite: '#FFFFFF',
      },
      fontFamily: {
        zenmaru: ['"Zen Maru Gothic"'],
      },
      borderRadius: {
        common: '5vw',
        cardoutl: '2.5vw',
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
    backgroundImage: {
      smile: "url('/img/smile.svg')",
      smilewhite: "url('/img/smile_white.svg')",
      texture: "url('/img/texture.png')",
      mail: "url('/img/letter.svg')",
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '60%': '60%',
      16: '4rem',
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right 4rem top 4rem',
      top: 'top',
      'top-4': 'center top 1rem',
    },
  },
  variants: {},
  plugins: [],
}
