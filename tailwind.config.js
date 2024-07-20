/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#d09423',
        'top-bg':'#2d5356',
        'p':'#9eadaf',
        'delivery':'#ffba35',
        'dark':'#424242',
        'gray':'#f5f5f5',
        'green':'#517173',
        'grey':'#d9d9d9',
        'aboutbg':'#faf4e9',
        'about':'#d2982b'
        
      },
      backgroundImage:{
        'flash':"url('./src/assets/images/makeup.jpg')"
      }
      
    },
  },
  plugins: [],
}
