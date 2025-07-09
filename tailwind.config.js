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
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
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

        "glass-bg": "rgba(70, 70, 70, 0.26)",
      },
      animation: {
        marquee: "marquee 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      boxShadow: {
        "inset-glass": "inset 0px 4px 12.6px 0px rgba(255, 255, 255, 0.25)",
      },
      backdropBlur: {
        glass: "26px",
      },
    },
  },
  plugins: [heroui()],
};

module.exports = config;
