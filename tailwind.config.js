module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    fontFamily:{
      Shadows:['Shadows Into Light']
    },      
    animation:{
      'loading': 'transform_scale 3.5s linear infinite,filter_rotate 3.5s linear infinite',
    },
    keyframes: {
      transform_scale: {
        '0%,9.99%,70.0001%': { transform: 'scale(0)' },
        '10%,70%': { transform: 'scale(1)' },
      },
      filter_rotate:{
        '0%':{filter:'hue-rotate(0deg)'},
        '100%':{filter:'hue-rotate(360deg)'},
      },
    }
  },
  plugins: [require('@tailwindcss/line-clamp'),require('@tailwindcss/forms'),],

}
