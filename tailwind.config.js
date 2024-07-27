/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        navbar_top_bg_color: "#343131",
        dark: "#404040",
        bg_color: "#E6E4E4",
        box: "#212121"
=======
        dark: "#404040",
        bg_color: "#FAF9F9"
>>>>>>> bebb75833497644622367fc38805aa4eaad1c149
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        wiggle: 'wiggle .8s',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
})

