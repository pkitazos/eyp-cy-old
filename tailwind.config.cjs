/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      "lg-xl": "1150px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-indigo": "#394692",
        "primary-yellow": "#FFD700",
        "primary-blue": "#618ECA",
        "primary-dark-blue": "#0E3963",
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
