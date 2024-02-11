/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Yellow: '#F4D04E',
        White: '#FFFFFF',
        Grey: '#808080',
        Black: '#121212',
      },
      fontFamily: {
        Figtree: ['Figtree'],
      }
    },
  },
  plugins: [],
}

