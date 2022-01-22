module.exports = {
  mode: 'jit',
  purge: ['/public/index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        'blue': '#4A90E2',
        'blue-dark': '#00408B',
        'red': '#D0021B',
        'orange': '#f5A623',
        'orange-light': '#fff2dc',
        'gray-lighter': '#f2f2f2',
        'gray': '#c8c8c8',
        'gray-dark': '#757575',
        'white': '#ffffff',
        'black': '#000000',
        'gray-light': '#E1E1E1',
      },
      fontFamily: {
        "roboto": ["Roboto"],
      },
      margin: { 
        '35': '35px',
        '68': '68px',
        '75': '75px',
      },
      width: { 
        '100': '28rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};