/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showCard: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        } 
      }, 
      animation:{
        showCard: 'showCard 1s ease forwards'
      },
      boxShadow: {
        'card': '0 0 5px #27272a',
        'card-w': '0 0 5px #71717a'
      },
      height: {
        '90': '430px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

