/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cream': '#edeae6',
        'green': '#7e846b',
        'brown': '#594e36'
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'lora': ['Lora', 'serif'],
      'pacifico': ['Pacifico', 'cursive']
    },
    screens: {
      'xs': '200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}