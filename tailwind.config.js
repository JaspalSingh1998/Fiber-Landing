module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4D13D1",
        muted: "#4F4F4F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
