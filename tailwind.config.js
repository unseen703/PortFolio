/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // colors: {
      //   primary: "#1F0D01",
      //   secondary: "#C3B6A6",
      //   tertiary: "#301300",
      //   "black-100": "#CB7841",
      //   "black-200": "#090325",
      //   "white-100": "#f3f3f3",
      // },
      // boxShadow: {
      //   card: "0px 35px 120px -15px #211e35",
      // },
      colors: {
        // primary: "#050816",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
        primary: "#050816",
        secondary: "#a6bec3",
        tertiary: "#101d30",
        "black-100": "#0d1525",
        "black-200": "#030e25",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.svg')",
        //  "hero-pattern": "url('/src/assets/herobg.png')",
        // "hero-pattern": "url('/src/assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
};