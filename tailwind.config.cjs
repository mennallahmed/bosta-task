/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e30613",
        secondary: "#4f5665",
        gray: "#475467"
      },
    },
  },
  plugins: [],
};
