/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#845EEE",
          200: "#652CD1",
        },
        grey: {
          100: "#E5E7EB",
          200: "#A1A1A9",
          300: "#4D5562",
          400: "#394150",
          500: "#212936",
          600: "#121826",
        },
      },
    },
  },
  plugins: [],
};
