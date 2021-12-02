module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url(/images/header-bg.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
