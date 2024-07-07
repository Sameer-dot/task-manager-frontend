/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#635FC7",
        "purple-hover": "#A8A4FF",
        red: "#EA5555",
        "red-hover": "#FF9898",
        "medium-gray": "#828FA3",
        "dark-gray": "#2B2C37",
        "very-dark-gray": "#20212C",
        "light-lines": "#E4EBFA",
        "dark-lines": "#3E3F4E",
        "background-light": "#F4F7FD",
        "background-dark": "#000000",
        white: "#FFFFFF",
        black: "#000112",
      },
    },
  },
  plugins: [],
};
