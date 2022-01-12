module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    fontFamily:{
      Shadows:['Shadows Into Light']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],

}
