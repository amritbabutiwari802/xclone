/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        pageColor1: "#064532",
        pageColorRed: "#F1592B",
        textColor1: "#767A79",
      },
      screens: {
        max_sm: { max: "640px" },
        max_md: { max: "768px" },
        max_lg: { max: "1024px" },
        max_xl: { max: "1280px" },
        max_2xl: { max: "1536px" },
      },
      fontFamily: {
        iSerif: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
