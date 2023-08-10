/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257e6"
        }
      }
    },
  },
  plugins: [],
}

