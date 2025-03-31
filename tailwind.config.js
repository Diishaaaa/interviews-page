/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sixtyfour: ["Sixtyfour", "cursive"], 
        epilogue: ["Epilogue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#3F51B5",
        background: "#F1F2FD",
      },
    },
  },
  plugins: [],
};
