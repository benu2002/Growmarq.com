/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#020617', // Deepest background
          800: '#0f172a', // Card background
          700: '#1e293b', // Borders
          500: '#0055FF', // Primary Blue
          400: '#00D4FF', // Cyan Accent
          300: '#67e8f9', // Light Cyan
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
