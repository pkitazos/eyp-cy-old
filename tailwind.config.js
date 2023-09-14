const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "495px",
      sm: "640px",
      md: "768px",
      "md-lg": "900px",
      lg: "1024px",
      "lg-xl": "1150px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      gridRowStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      borderRadius: {
        "4xl": "2rem",
      },
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
          700: "#FFE876",
          800: "#FFDE4D",
          900: "#FFD200",
        },
        "base-white": "#f9f9f9",
      },
      backgroundImage: {
        "underliner-secondary":
          "linear-gradient(transparent calc(100% - 10px), #33C5FF 5px);",
        "underliner-orange":
          "linear-gradient(transparent calc(100% - 10px), orange 5px);",
      },
      fontFamily: {
        sans: ["var(--font-source-sans-3)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          dbg: (value) => ({
            outline: "2px solid",
            outlineColor: value,
          }),
        },
        { values: flattenColorPalette(theme("color")), type: "color" }
      ),
        addUtilities({
          ".diamond-mask": {
            maskImage: "url('/diamond-mask.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          },
          // debug classes
          ".--orange-500": {
            outline: "2px solid",
            outlineColor: "#f97316",
          },
          ".--orange-600": {
            outline: "2px solid",
            outlineColor: "#ea580c",
          },

          ".--amber-500": {
            outline: "2px solid",
            outlineColor: "#f59e0b",
          },
          ".--amber-600": {
            outline: "2px solid",
            outlineColor: "#d97706",
          },
          ".--lime-500": {
            outline: "2px solid",
            outlineColor: "#84cc16",
          },
          ".--lime-600": {
            outline: "2px solid",
            outlineColor: "#65a30d",
          },
          ".--emerald-500": {
            outline: "2px solid",
            outlineColor: "#10b981",
          },
          ".--emerald-600": {
            outline: "2px solid",
            outlineColor: "#059669",
          },
          ".--sky-500": {
            outline: "2px solid",
            outlineColor: "#0ea5e9",
          },
          ".--sky-600": {
            outline: "2px solid",
            outlineColor: "#0284c7",
          },
          ".--blue-500": {
            outline: "2px solid",
            outlineColor: "#3b82f6",
          },
          ".--blue-600": {
            outline: "2px solid",
            outlineColor: "#2563eb",
          },
          ".--purple-500": {
            outline: "2px solid",
            outlineColor: "#a855f7",
          },
          ".--purple-600": {
            outline: "2px solid",
            outlineColor: "#9333ea",
          },
          ".--pink-500": {
            outline: "2px solid",
            outlineColor: "#ec4899",
          },
          ".--pink-600": {
            outline: "2px solid",
            outlineColor: "#db2777",
          },
        });
    }),
  ],
};
