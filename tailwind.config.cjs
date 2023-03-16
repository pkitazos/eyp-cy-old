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
        primary: {
          600: "#3654FF",
          700: "#2B43CC",
          800: "#253AB0",
          900: "#1F3091",
        },
        secondary: {
          700: "#66D4FF",
          800: "#33C5FF",
          900: "#00B7FF",
        },
        accent: {
          800: "#FFDE4D",
          900: "#FFD200",
        },
        "default-white": "#F9F9F9",
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
