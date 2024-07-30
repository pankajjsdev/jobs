import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Center the container by default
        padding: {
          DEFAULT: '1rem',  // Default padding for all screen sizes
          sm: '1rem',
          md: '1rem',
          lg: '2rem',
          xl: '2rem',
        },
      },
      colors: {
        main: {
          background: '#f8fbfe',
          heading: '#04081b', // neutral-500
          paragraph: '#575a66', // neutral-300
          secondary: '#36c2ce', // secondary-500
          primary: '#000d83', // primary-500
          white: '#fff',
          tertiary: '#fc6363',
          border: '#e6e6e8', // neutral-50
          transparent: 'rgba(255, 255, 255, 0)',
          black: '#000',
        },
        primary: {
          50: '#e6e7f3',
          100: '#b0b4d9',
          200: '#8a90c6',
          300: '#545dac',
          400: '#333d9c',
          500: '#000d83',
          600: '#000c77',
          700: '#00095d',
        },
        secondary: {
          50: '#ecfcfa',
          100: '#c6edff',
          200: '#a7f1e9',
          300: '#7feae0',
          400: '#6cd0ff',
          500: '#36c2ce',
          600: '#3accbd',
          700: '#328bb5',
        },
        neutral: {
          50: '#e6e6e8',
          100: '#b1b2b8',
          200: '#8c8d96',
          300: '#575a66',
          400: '#363949',
          500: '#04081b',
          600: '#040719',
          700: '#030613',
          800: '#02040f',
          900: '#02030b',
        },
        tertiary: {
          50: '#ffefef',
          100: '#fecfcf',
          200: '#feb7b7',
          300: '#fd9696',
        },
        shadow: {
          50: 'rgba(255, 255, 255, .05)',
          100: 'rgba(15, 82, 255, .1)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
