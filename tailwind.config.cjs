/** @type {import('tailwindcss').Config} */
const linear = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(2, 153, 108, 0) 88.78%, rgba(1, 182, 129, 0.0544731) 96.13%, rgba(0, 255, 181, 0.189) 106.08%, rgba(0, 0, 0, 0.8))'

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
      transparent: 'transparent',
      
      black: '#000000',
      white: '#FFFFFF',
      
      error:  '#FF4D40',
      info: '#81D8F7',
      warning: '#FFEF0D',
      success: '#4DFFCB',

      gray:{
        900: '#121214',
        800: '#131516',
        700: '#202024',
        600: '#474755',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      
      green:{
        700: '#00CC8F',
        500: '#00FFB5',
        300: '#4DFFC9',
      }
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
      backgroundImage: {
        image: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(2, 153, 108, 0) 88.78%, rgba(1, 182, 129, 0.0544731) 96.13%, rgba(0, 255, 181, 0.189) 106.08%, rgba(0, 0, 0, 0.8)), url("./src/img/background-image.png")'
      }
    },
  },
  plugins: [],
}
