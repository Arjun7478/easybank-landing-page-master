const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        xl: "1400px",
      },
      colors: {
        "Grayish-Blue": " hsl(233, 8%, 62%)",
        "Light-Grayish-Blue": " hsl(220, 16%, 96%)",
        "Very-Light-Gray": " hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
        "Dark-Blue": " hsl(233, 26%, 24%)",
        "Lime-Green": " hsl(136, 65%, 51%)",
        "Bright-Cyan": " hsl(192, 70%, 51%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
