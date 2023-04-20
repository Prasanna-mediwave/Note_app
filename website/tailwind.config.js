/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBG: "#212121",
        primaryHeading: "#F4F4F4",
        primaryContent: "#EFEFEF",
        naturalWhite: "#FFFFFF",
        primaryDate: "#585858",
        secondaryDate: "#AAAAAA",
        selected: "#7BFF84",
        cardColor: {
          1: "#FFA186",
          2: "#FFC575",
          3: "#E2EB90",
          4: "#A5F982",
          5: "#75D9E7",
          6: "#E775DA",
          7: "#759EFF",
          8: "#FFFFFF",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      opacity: {
        s: "16%",
      },
    },
    screens: {
      min_xl: { min: "1367px" },
      max_xs: { max: "620px" },
      max_xxs: { max: "420px" },
      min_xs: { min: "621px" },
    },
  },
  plugins: [],
};
