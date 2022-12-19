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
        "primary-dark-blue": "#0E3963",
        "primary-indigo": {
          100: "#cffafe",
          200: "#8caad8",
          300: "#628bc9",
          400: "#4270bb",
          500: "#265aaf",
          600: "#1f53ac",
          700: "#1549a7",
          800: "#093e9f",
          900: "#13327a",
        },
        "primary-blue": {
          100: "#ace0f5",
          200: "#82ceef",
          300: "#5fb9e5",
          400: "#4aa8dc",
          500: "#3997d3",
          600: "#328acb",
          700: "#257ac2",
          800: "#13327a",
          900: "#084faa",
        },
        "primary-yellow": {
          100: "#fff6c3",
          200: "#fff3a2",
          300: "#ffef83",
          400: "#ffec6f",
          500: "#ffe95e",
        },
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
