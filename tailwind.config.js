/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1070px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],

}
