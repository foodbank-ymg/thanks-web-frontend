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
        mywhite: '#FFFFFF',
      },
      fontSize: {
        h2: [
          '48px',
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
      },
    },
    fontFamily: {
      body: ['"Zen Maru Gothic"'],
    },
    backgroundImage: {
      smile: "url('/item_smile_opa20_rot-20.svg')",
    },
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
