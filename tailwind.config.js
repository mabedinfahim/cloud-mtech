/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('/src/images/support.jpg')",
        'banner-img1': "url('/src/images/cyber-bg.png')"
      }
    },
  },
  plugins: [],
}
