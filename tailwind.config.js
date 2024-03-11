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

