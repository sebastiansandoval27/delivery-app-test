const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "320px",
      xxsm: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        "c-purple": "#503E9D",
        "c-yellow": "#FCD661",
        "c-orange": "#FB6D3B",
        "c-pink-light": "#FEF7EC",
        "c-pink-dark": "#d2ac97",
        "c-grey-light": "#F8F8F8",
        "c-grey-dark": "#a29e9b",
        "c-grey-text": "#988F89",
        "c-white": "#faf8f5",
        "c-black": "#343637",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), "macros"],
};
