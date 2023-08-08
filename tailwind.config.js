/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myyellow: '#F8B62B',
        myyellowpale: '#FEF8EA',
        mypurple: '#601986',
        mybrown: '#660000',
        mygray: '#999999',
        mywhite: '#FFFFFF',
      },
      fontSize: {
        h2: [
          '3.75vw',
          {
            lineHeight: '48px',
            fontWeight: '500',
          },
        ],
        label: [
          '32px',
          {
            lineHeight: '48px',
            fontWeight: '500',
          },
        ],
        desc: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        posthead: [
          '32px',
          {
            lineHeight: '42px',
            fontWeight: '500',
          },
        ],
        mh2: [
          '32px',
          {
            lineHeight: '50px',
            fontWeight: '500',
          },
        ],
        mlabel: [
          '26px',
          {
            lineHeight: '40px',
            fontWeight: '500',
          },
        ],
        mdesc: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        mposthead: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
      },
    },
    fontFamily: {
      body: ['"Zen Maru Gothic"'],
    },
    backgroundImage: {
      smile: "url('/item_smile_opa20_rot-20.svg')",
      mail: "url('/Illust_letter.svg')",
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
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      large: '5vw',
    },
  },
  variants: {},
  plugins: [],
}
