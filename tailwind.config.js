/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#F5F7FA',
        neutralDGrey: '#4D4D4D',
        brandPrimary: '#4CAFAF',
        neutralGrey: '#717171',
        gray900: '#18191F',
        grey: '#efeff0',
      },
      fontSize: {
        'custom-40': '40px',
        'custom-30': '30px',
        'custom-18': '18px',
        'custom-17': '17px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
