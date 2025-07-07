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
        padding: {
          DEFAULT: "20px",
          lg: "50px",
          xl: "80px",
        },
      },
      colors: {
        dark: "#12100F",
        light: "#ffffff",
        accent: "#FF7300",
      },
    },
  },
  plugins: [heroui()],
};

module.exports = config;
