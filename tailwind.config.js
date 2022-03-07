module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      red: "#ef233c",
      dark: "#2b2d42",
      grey: "#8d99ae",
      dred: "#d90429",
      light: "#edf2f4",
    },
    extend: {},
  },
  plugins: [],
};
