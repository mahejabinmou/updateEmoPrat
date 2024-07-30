/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Varela':['Varela Round', 'sans-serif']
      },
      backgroundImage: {
        'overlay-gradient': 'linear-gradient(rgba(222, 222, 0, 1), rgba(0, 4444, 0, 0))',
      },
    },
  },
  plugins: [],
}