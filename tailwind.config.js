/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      theme: {
        borderRadius: {
          '1120px': '1120px',
        },
      },
      colors: {
        'primary': '#0F103F',
        'secondary': '#2F2F8A',
        'third': '#2954A3',
        'fourth': '#C961DE'
         
      },
      spacing: {
        '8rem': '8rem',
        '60rem': '60rem',
        '600px': '600px',
        '686px': '686px',

        
      },
      width: {
        '368': '368px',
        '440': '440px',
        '412': '412px',
        '461': '461px',
        '500': '500px',
        '510': '510px',
        '590': '590px',
        '700': '700px',
        '735': '735px',
        '985': '985px',
        '1129': '1129px',

      },
      height: {
        '102.78': '102.78px',
        '160': '160px',
        '209': '209px',
        '302': '302px',
        '420': '420px',
        '461': '461px',
        '735': '735px',

        '985': '985px',
        '1025': '1025px'
      },
      borderRadius: {
        '45': '45px',
      },
      rotate: {
        '20': '20deg'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
