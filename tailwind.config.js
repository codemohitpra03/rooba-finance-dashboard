/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'switz':['Switzer', "sans-serif"]
    },
    extend: {
      colors: {
        'mywhite': 'rgba(255, 255, 255, 1)',
        'graytext':'rgba(0, 0, 0, 0.3)',
        'badgebg':'rgba(0, 0, 0, 0.2)',
        'badgetext':'rgba(0, 0, 0, 0.5)',
        'buttonbg':'rgba(67, 117, 251, 1)',
        'buttontext':'rgba(242, 242, 242, 1)',
        'markerdisabled':'rgba(0, 0, 0, 0.25)',
        'stack':'rgba(124, 124, 124, 1)',
        'statusgray':'rgba(226, 226, 226, 1)',
      }
    },
  },
  plugins: [],
}

