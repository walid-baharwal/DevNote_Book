/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Body/**/*.{js,jsx,ts,tsx}",
    // "./src/components/Navbar/**/*.{js,jsx,ts,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: {nunito:'nunito'}
    },
    extend: {
      colors:{
        BoxFocus:{50:'#ffc107'},
        BoxShadow:{50:'#ffc10770'},
        BoxWhite:{50:'#ffffff'}
        // chatblack:{50:'#343541'},
        // box:{50:'#40414F'},
        // leftbody:{50:'#202123'},
        // right2:{50:'#444654'}
      }
    },
  },
  plugins: [],
}
