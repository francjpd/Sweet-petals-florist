/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        theme: {
          light: "#fffaf0",
          dark: "#232b2b"
        },
        floralWhite: {
          50: '#fcf4f4',
          100: '#fae6e6',
          200: '#f7d1d1',
          300: '#f0b1b1',
          400: '#e99696',
          500: '#d75c5c',
          600: '#c33f3f',
          700: '#a33232',
          800: '#872d2d',
          900: '#712b2b',
          950: '#3d1212',
        },
        casper: {
          50: '#f4f7fa',
          100: '#e6edf3',
          200: '#d4dfe9',
          300: '#b6cada',
          400: '#9db6cd',
          500: '#7896b9',
          600: '#6680aa',
          700: '#5a709b',
          800: '#4d5d80',
          900: '#414e67',
          950: '#2b3240',
        },
        charlestonGreen: {
          50: "#e3d3e5",
          100: "#c3b8ca",
          200: "#888698",
          300: "#5c616b",
          400: "#3a4346",
          500: "#232b2b",
          600: "#161c1b",
          700: "#121715",
          800: "#141917",
          900: "#1b211f",
        },
      }
    },
  },
  plugins: [],
}

