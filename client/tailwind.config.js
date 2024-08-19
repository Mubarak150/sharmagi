/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Custom breakpoint for Surface Pro 7 with minimum and maximum width
      
    },
    extend: {
      screens: {
        'md':  '600px',
        'sp7':  '768px',// Custom breakpoint for Surface Pro 7 with minimum and maximum width
        'lg':  '1025px',
        'xl':  '1441px',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
      },
      colors: {
        blue: '#3A86FF', 
        slate: '#283646',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
