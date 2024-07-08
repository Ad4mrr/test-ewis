const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'primary': '#00603a',
      'primarygray': '#00603A40',
      'black': '#374151',
      'blackFooter': '#222222',
      'white': '#ffffff',
      'gray50': '#F9FAFBAD',
      'background': '#fcfdfb',
      'videobg': '#fffdff',
      'contactbg': '#E9F5DE',
      'primarysh': '#00603A54',
      'purple': '#B7A1F338',
      'red': '#fe0808ff ',
      'redsh': '#FE080862 ',
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
        'Rubik': ['Rubik'],
        'Inter': ['Inter']
      },
      backgroundImage: {
        'eduPara': "url('./assets/background/educationParalex.webp')",
        'aboutUs': "url('./assets/background/aboutus.webp')",
        'tablet': "url('https://i.imgur.com/wVqrxDZ.png')",
        'bankPara': "url('./assets/background/BankingParalex.webp')",
        'healthPara': "url('./assets/background/healthpara.webp')",
        'retail': "url('./assets/background/retail.webp')",
        'publicBack': "url('./assets/background/publicBack.webp')",
        'manuBack': "url('./assets/background/manuBack.webp')",
        'Cree': "url('./assets/background/career_traing.webp')",
        'topan': "url('./assets/background/toppan.webp')",
      },
    },
    plugins: [
      flowbite.plugin(),
    ],
  }
}