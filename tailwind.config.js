/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Rakkas": ['Rakkas', "serif" ],
        "Salsa": ['Salsa', "cursive"],
        "Gloock": ['Gloock', "serif"]
      }
    },
  },
  plugins: [],
}