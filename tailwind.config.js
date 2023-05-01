/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f3bafc",
        
"secondary": "#F9A51A",
        
"accent": "#ed97ea",
        
"neutral": "#262027",
        
"base-100": "#E4E7EC",
        
"info": "#327DCD",
        
"success": "#6AE7A8",
        
"warning": "#F5BF42",
        
"error": "#EE2F6F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

