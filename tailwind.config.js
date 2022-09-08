/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#A89E84",
        light2: "#B58901",
        light3: "#DDD6C1",
        light4: "#EEE8D5",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [require("daisyui")],
}
