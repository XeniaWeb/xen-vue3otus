/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'Roboto','Fira Sans', 'Droid Sans', 'ui-sans-serif', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'Inter', 'Fira Sans', 'Droid Sans', 'ui-sans-serif', 'sans-serif']
      },
      screens: {
        '2xl': '1280px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
