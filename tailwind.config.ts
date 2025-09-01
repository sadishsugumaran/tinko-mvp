import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exact Tinko brand colors from style guide
        'tinko-teal': '#009CA6',
        'tinko-purple': '#6A1B9A',
        'tinko-pink': '#D81B60', 
        'accent-green': '#9EDC6F',
        'tinko-white': '#FFFFFF',
        'tinko-charcoal': '#333333',
      },
      fontFamily: {
        // Fallback to system fonts that are rounded
        sans: ['ui-rounded', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config