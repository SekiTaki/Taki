const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode:'layers',
    content:['./src/**/*.{js,jsx,ts,tsx}', 'src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.trueGray,
        red: colors.yellow,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
