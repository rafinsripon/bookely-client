/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c91a9d",
        
"secondary": "#ffffa5",
        
"accent": "#e58bca",
        
"neutral": "#292A38",
        
"base-100": "#FFFFFF",
        
"info": "#45D1ED",
        
"success": "#2CC39B",
        
"warning": "#906109",
        
"error": "#EE342B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
