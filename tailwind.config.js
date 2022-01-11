module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      youyuan:['youyuan']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],

}
