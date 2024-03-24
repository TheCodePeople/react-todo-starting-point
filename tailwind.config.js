/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      violet: "#4338ca",
      rose: "#f87171",
      grey: "#1e293b",
      lightgrey: "#475569",
      darkwhite: "#e2e8f0",
      lightwhite: "#f1f5f9",
      veryLight: "rgb(226 232 240)",
      white: "rgb(255 255 255)",
      whatever: "#f1f5f9",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
