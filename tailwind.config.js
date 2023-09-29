/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'rega.html'],
  theme: {
    container : {
      center : true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#6d28d9',
        secondary : '#64748b',
        dark : '#0f172a',
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

