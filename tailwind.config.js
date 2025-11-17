/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#010F35',
        'deep-blue-alt': '#00184F',
        'turquoise': '#02AAAA',
        'turquoise-alt': '#00C1C1',
        'mit-bordeaux': '#A31F34',
        'sunset': '#FF8500',
        'sunset-sub': '#FFB600'
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
