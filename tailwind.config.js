/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      // Font family
      fontFamily: {
      'pop': ['Poppins'],
      'podkova': ['Podkova'],
      'frank': ['Frank Ruhl Libre'],
    },
      // Font family
      // Container
      maxWidth: {
        'menuContainer': '82.5rem',
      },
      // Container
      // Color
      colors:{
        'headerBg': '#FAE3B6',
        'btnHover': '#FDBB57',
        'btnBdr': '#FFD687',
        'counterColor': '#FEECC8',
        'shopBg': '#CFA485',
        'starColor': '#FFAF37',
      },
      // Color
    },
  },
  plugins: [],
}

