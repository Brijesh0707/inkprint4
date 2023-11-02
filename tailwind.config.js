/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      backgroundColor: {
        'custom-btn': '#00A6DB',
        'custm-bg-product': '#F9F5ED',
        'custom-bg-card': '#FFFFFF',
        'custom-bg-sproduct': 'rgba(255, 255, 255, 0.5)',
        'custom-bg-gray': '#ADADAD'
      },
      textColor: {
        'custom-text': '#00A6DB',
        'custom-text-hero': '#AFC40C',
        'custom-text-p': '#444444',
        'custom-text-grey': '#ADADAD',
        'custom-text-darkGrey': '#6D6E70',
        'custom-text-green': '#A7C539',
        'custom-navbarGrey': '#777777'
      },
      borderColor: {
        'blue': '#00A6DB',
        'grayLight': '#DDDDDE',
        'grayMid': '#ADADAD',
        'green': '#A7C539'
      },
      colors: {
        'shadowGreen': '#AFC40C',
      },
    },
  },
  plugins: [],
};
