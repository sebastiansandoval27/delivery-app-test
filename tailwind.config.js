const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
    colors: {
      ...defaultColors,
      ...{
        "c-purple": "#48377d",
        "c-yellow": "#ebbc43",
        "c-orange": "#cc6026",
        "c-pink-light": "#eacca4",
        "c-pink-dark": "#d2ac97",
        "c-grey-light": "#cccdcf",
        "c-grey-dark": "#a29e9b",
        "c-white": "#faf8f5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
