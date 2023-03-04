/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {},
  },
  plugins: [],
};
