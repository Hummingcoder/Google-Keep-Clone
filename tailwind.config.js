/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#222222",
        darkInputBg: "#B9B4C7",
        lightGrey: "#F3EFE0",
        darkHover: "#393E46",
        NavBg: "#F6C90E",
      },
      fontFamily: {
        Nunito: "Archivo, serif",
      },
    },
  },
  plugins: [],
};
