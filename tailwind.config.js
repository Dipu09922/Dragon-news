import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#403F3F",
        secondary: "#D72050",
        accent: "#706F6F",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#403F3F",
          "secondary": "#D72050",
          "accent": "#706F6F",
          "base-200": "#f3f3f3",
          "base-300": "#e7e7e7",
        },
      },
    ],
    darkTheme: "light",
  },
}