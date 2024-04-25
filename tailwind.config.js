/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1DD100",
        "secondary": "#030712",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}