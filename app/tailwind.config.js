/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1',
      },
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
        'mg': {'min': '200px', 'max': '800px'}
      },
      width: {
        '24': '24px',
        '142': '142px',
        '800': '800px',
        '1216': '1216px',
        '1440': '1440px',
        '1280': '1280px',
      },
      height: {
        '24': '24px',
        '32': '32px',
        '128': '128px',
        '200': '200px',
        '418': '418px',
        '596': '596px',
        '1832': '1832px',
      },
      padding: {
        '96': '96px',
      },
      gap: {
        '32': '32px',
        '64': '64px'
      },
      colors: {
        black: '#000000',
        darkgray: {
          100: '#121212'
        },
        lightgray: '#DDDDDD',
        grayy: {
          200: '#D0D5DD',
          800: '#1D2939',
        },
        midnight: {
          100: '#16253D',
        },
        dusk: {
          100: '#002C54'
        },
        golden: {
          100: '#EFB509'
        },
        bronze: {
          100: '#CD7213'
        }
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif']
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

