/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          800: "#262626",
          900: "#1D1D1D",
        },
        orangebutton: {
          normal: "#CD4D17",
        },
        redbutton: {
          normal: "#D90A14",
        },
      },
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
