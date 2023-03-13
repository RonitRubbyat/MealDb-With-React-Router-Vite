/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        'm-50%': '50%',
        'm-25%': '25%',
      }
    },
  },
  plugins: [],
}
