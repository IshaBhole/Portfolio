/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b19cd9', // Soft lavender
        secondary: '#d4c5f9', // Light lavender
        accent: '#9f7aea', // Medium purple
        dark: '#2d1b69', // Deep lavender
        darker: '#1a0d40', // Darkest lavender
        surface: '#4c3575', // Muted lavender
        text: {
          primary: '#faf5ff', // Very light purple
          secondary: '#e9d5ff', // Light lavender text
          muted: '#c4b5fd', // Muted lavender text
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#b19cd9',
          600: '#9f7aea',
          700: '#8b5cf6',
          800: '#7c3aed',
          900: '#6b21a8',
        },
        lilac: {
          100: '#f0e6ff',
          200: '#e1ccff',
          300: '#d4c5f9',
          400: '#c7b3f5',
          500: '#b19cd9',
          600: '#9a85c4',
        },
        periwinkle: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-lavender': 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)',
        'gradient-dark-lavender': 'linear-gradient(135deg, #2d1b69 0%, #1a0d40 100%)',
        'gradient-main': 'linear-gradient(135deg, #b19cd9 0%, #d4c5f9 50%, #9f7aea 100%)',
        'gradient-soft': 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #d8b4fe 100%)',
      }
    },
  },
  plugins: [],
}