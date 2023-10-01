/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackpure": "#171718",
        "black-border": "#26292d",
        "purple": "#5c62ec"

      }
    },

  },
  plugins: [require("daisyui")],
}

