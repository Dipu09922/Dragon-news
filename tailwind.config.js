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
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#F3F3F3",
          "base-300": "#E7E7E7",
        },
      },
    ],
  },
}