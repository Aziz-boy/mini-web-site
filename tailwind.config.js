/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        regim:{
          "gray-400":"#111827",
          "gray-300":"#374151"
        }
      },
      maxWidth:{
        "main-container":"1216px",
        "138":"592px",
        "22":"88px"
      },
      width:{
        "100":"400px",
        "140":"700px",
        "200":"800px",
      },
      height:{
        "100":"400px",
        "140":"700px",
      },
      lineHeight:{
        "12":"48px",
        "20":"80px",
        "18":"72px",
        "15":"60px",
      },
      padding:{
        "18":'72px'
      },
      gap:{
        '18':'72px'
      }
      
    },
  },
  plugins: [],
}

