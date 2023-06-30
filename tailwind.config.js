/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {

        'background' : '#c0d2d4'
      },
      fontFamily: {
        'header': ["Shadows Into Light", 'sans-serif'],
        'cuteness' : ["Ysabeau Office", 'serif'],
        'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}

