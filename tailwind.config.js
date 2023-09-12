const plugin = require("tailwindcss/plugin");

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
          800: "#FFDE4D",
          900: "#FFD200",
        },
        "base-white": "#f9f9f9",
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
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".diamond-mask": {
          maskImage: "url('/diamond-mask.svg')",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        },

        ".--slate-400": {
          outline: "2px solid",
          outlineColor: "#94a3b8",
        },

        ".--slate-500": {
          outline: "2px solid",
          outlineColor: "#64748b",
        },

        ".--slate-600": {
          outline: "2px solid",
          outlineColor: "#475569",
        },

        ".--gray-400": {
          outline: "2px solid",
          outlineColor: "#9ca3af",
        },

        ".--gray-500": {
          outline: "2px solid",
          outlineColor: "#6b7280",
        },

        ".--gray-600": {
          outline: "2px solid",
          outlineColor: "#4b5563",
        },

        ".--zinc-400": {
          outline: "2px solid",
          outlineColor: "#a1a1aa",
        },

        ".--zinc-500": {
          outline: "2px solid",
          outlineColor: "#71717a",
        },

        ".--zinc-600": {
          outline: "2px solid",
          outlineColor: "#52525b",
        },

        ".--neutral-400": {
          outline: "2px solid",
          outlineColor: "#a3a3a3",
        },

        ".--neutral-500": {
          outline: "2px solid",
          outlineColor: "#737373",
        },

        ".--neutral-600": {
          outline: "2px solid",
          outlineColor: "#525252",
        },

        ".--stone-400": {
          outline: "2px solid",
          outlineColor: "#a8a29e",
        },

        ".--stone-500": {
          outline: "2px solid",
          outlineColor: "#78716c",
        },

        ".--stone-600": {
          outline: "2px solid",
          outlineColor: "#57534e",
        },

        ".--red-400": {
          outline: "2px solid",
          outlineColor: "#f87171",
        },

        ".--red-500": {
          outline: "2px solid",
          outlineColor: "#ef4444",
        },

        ".--red-600": {
          outline: "2px solid",
          outlineColor: "#dc2626",
        },

        ".--orange-400": {
          outline: "2px solid",
          outlineColor: "#fb923c",
        },

        ".--orange-500": {
          outline: "2px solid",
          outlineColor: "#f97316",
        },

        ".--orange-600": {
          outline: "2px solid",
          outlineColor: "#ea580c",
        },

        ".--amber-400": {
          outline: "2px solid",
          outlineColor: "#fbbf24",
        },

        ".--amber-500": {
          outline: "2px solid",
          outlineColor: "#f59e0b",
        },

        ".--amber-600": {
          outline: "2px solid",
          outlineColor: "#d97706",
        },

        ".--yellow-400": {
          outline: "2px solid",
          outlineColor: "#facc15",
        },

        ".--yellow-500": {
          outline: "2px solid",
          outlineColor: "#eab308",
        },

        ".--yellow-600": {
          outline: "2px solid",
          outlineColor: "#ca8a04",
        },

        ".--lime-400": {
          outline: "2px solid",
          outlineColor: "#a3e635",
        },

        ".--lime-500": {
          outline: "2px solid",
          outlineColor: "#84cc16",
        },

        ".--lime-600": {
          outline: "2px solid",
          outlineColor: "#65a30d",
        },

        ".--green-400": {
          outline: "2px solid",
          outlineColor: "#4ade80",
        },

        ".--green-500": {
          outline: "2px solid",
          outlineColor: "#22c55e",
        },

        ".--green-600": {
          outline: "2px solid",
          outlineColor: "#16a34a",
        },

        ".--emerald-400": {
          outline: "2px solid",
          outlineColor: "#34d399",
        },

        ".--emerald-500": {
          outline: "2px solid",
          outlineColor: "#10b981",
        },

        ".--emerald-600": {
          outline: "2px solid",
          outlineColor: "#059669",
        },

        ".--teal-400": {
          outline: "2px solid",
          outlineColor: "#2dd4bf",
        },

        ".--teal-500": {
          outline: "2px solid",
          outlineColor: "#14b8a6",
        },

        ".--teal-600": {
          outline: "2px solid",
          outlineColor: "#0d9488",
        },

        ".--cyan-400": {
          outline: "2px solid",
          outlineColor: "#22d3ee",
        },

        ".--cyan-500": {
          outline: "2px solid",
          outlineColor: "#06b6d4",
        },

        ".--cyan-600": {
          outline: "2px solid",
          outlineColor: "#0891b2",
        },

        ".--sky-400": {
          outline: "2px solid",
          outlineColor: "#38bdf8",
        },

        ".--sky-500": {
          outline: "2px solid",
          outlineColor: "#0ea5e9",
        },

        ".--sky-600": {
          outline: "2px solid",
          outlineColor: "#0284c7",
        },

        ".--blue-400": {
          outline: "2px solid",
          outlineColor: "#60a5fa",
        },

        ".--blue-500": {
          outline: "2px solid",
          outlineColor: "#3b82f6",
        },

        ".--blue-600": {
          outline: "2px solid",
          outlineColor: "#2563eb",
        },

        ".--indigo-400": {
          outline: "2px solid",
          outlineColor: "#818cf8",
        },

        ".--indigo-500": {
          outline: "2px solid",
          outlineColor: "#6366f1",
        },

        ".--indigo-600": {
          outline: "2px solid",
          outlineColor: "#4f46e5",
        },

        ".--violet-400": {
          outline: "2px solid",
          outlineColor: "#a78bfa",
        },

        ".--violet-500": {
          outline: "2px solid",
          outlineColor: "#8b5cf6",
        },

        ".--violet-600": {
          outline: "2px solid",
          outlineColor: "#7c3aed",
        },

        ".--purple-400": {
          outline: "2px solid",
          outlineColor: "#c084fc",
        },

        ".--purple-500": {
          outline: "2px solid",
          outlineColor: "#a855f7",
        },

        ".--purple-600": {
          outline: "2px solid",
          outlineColor: "#9333ea",
        },

        ".--fuchsia-400": {
          outline: "2px solid",
          outlineColor: "#e879f9",
        },

        ".--fuchsia-500": {
          outline: "2px solid",
          outlineColor: "#d946ef",
        },

        ".--fuchsia-600": {
          outline: "2px solid",
          outlineColor: "#c026d3",
        },

        ".--pink-400": {
          outline: "2px solid",
          outlineColor: "#f472b6",
        },

        ".--pink-500": {
          outline: "2px solid",
          outlineColor: "#ec4899",
        },

        ".--pink-600": {
          outline: "2px solid",
          outlineColor: "#db2777",
        },

        ".--rose-400": {
          outline: "2px solid",
          outlineColor: "#fb7185",
        },

        ".--rose-500": {
          outline: "2px solid",
          outlineColor: "#f43f5e",
        },

        ".--rose-600": {
          outline: "2px solid",
          outlineColor: "#e11d48",
        },
      });
    }),
  ],
};
