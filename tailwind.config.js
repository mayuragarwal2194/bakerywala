/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '0px',
      // => @media (min-width: 0px) { ... }

      'md': '576px',
      // => @media (min-width: 576px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '992px',
      // => @media (min-width: 992px) { ... }
    },
  },
  plugins: [],
}

