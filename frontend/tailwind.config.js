/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "acd-yellow": "#fce116",
        "acd-yellow-light": "#fdec68",
        "acd-yellow-extralight": "#fef9cd",
        "acd-yellow-dark": "#978602",
        "acd-yellow-extradark": "#322d01",
        "track-red": "#973224",
      },
      fontFamily: {
        NunitoSans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
