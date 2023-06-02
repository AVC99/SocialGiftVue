/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.vue",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E0E722",
        lightPrimary:"#FCFDD3",
        secondary: "#222632",
        tertiary: "#30343F",
        background: "#151618"
          
      },
      fontFamily: {
        'body': [
          'Montserrat'
        ],
        'sans': [
          'Montserrat',
          'sans-serif'
        ]
      }
    },
    plugins: [
    
    ],
  }
}