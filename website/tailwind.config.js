/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}', './src/**/*.{html}'],
    extend: {
      colors: {},
      fontFamily: {
        primary: [],
      },
    },
    screens: {
      max_3xl: { max: '1920px' },
      max_2xl: { max: '1535px' },
      max_xl: { max: '1279px' },
      max_lg: { max: '992px' },
      max_md: { max: '768px' },
      max_sm: { max: '639px' },
      max_s: { max: '530px' },
      max_xs: { max: '420px' },
    },

  plugins: [],
};

