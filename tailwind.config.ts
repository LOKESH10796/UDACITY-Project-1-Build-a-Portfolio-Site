import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#2d3c49',
          900: '#1a2a3a',
        },
        accent: {
          50: '#faf5f0',
          100: '#f5e8d8',
          200: '#ebd0ad',
          300: '#e1b57f',
          400: '#d99a57',
          500: '#d4843d',
          600: '#c46c30',
          700: '#a55528',
          800: '#864726',
          900: '#6d3c23',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config