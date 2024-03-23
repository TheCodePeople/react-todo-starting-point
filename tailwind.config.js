/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      violet: "#4f46e5",
      rose: "#fb7185",
      grey: "#1e293b",
      darkwhite: "#e2e8f0",
      lightwhite: "#f1f5f9",
      veryLight: "rgb(226 232 240)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
