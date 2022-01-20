module.exports = {
  mode: 'jit',
  purge: ['/public/index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        'blue': '#4A9012',
        'blue-dark': '#00408B',
        'red': '#D0021B',
        'orange': '#f5A623',
        'orange-light': '#fff2dc',
        'gray-lighter': '#f2f2f2',
        'gray':'c8c8c8',
        'gray-dark': '#757575',
        'white': '#ffffff',
        'black':'#000000',
        'gray-light': '#e1e1e1',
      },
      fontFamily: {
        "roboto": ["Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};