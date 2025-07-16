import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        lg: "768px",
        xl: "1280px",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "360px",
          lg: "768px",
          xl: "1280px",
        },
        padding: {
          DEFAULT: "20px",
          // lg: "50px",
          xl: "80px",
        },
      },
      colors: {
        dark: "#12100F",
        light: "#ffffff",
        accent: "#FF7300",
        "accent-light": "#FF9D4C",
      },
      animation: {
        marquee: "marquee 12s linear infinite",
        loader: "l5 1s infinite linear alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        l5: {
          "0%": {
            boxShadow: "20px 0 #FF7300, -20px 0 #FF9D4C",
            background: "#FF7300",
          },
          "33%": {
            boxShadow: "20px 0 #FF7300, -20px 0 #FF9D4C",
            background: "#FF9D4C",
          },
          "66%": {
            boxShadow: "20px 0 #FF9D4C, -20px 0 #FF7300",
            background: "#FF9D4C",
          },
          "100%": {
            boxShadow: "20px 0 #FF9D4C, -20px 0 #FF7300",
            background: "#FF7300",
          },
        },
      },
    },
  },
  plugins: [heroui()],
};

module.exports = config;
