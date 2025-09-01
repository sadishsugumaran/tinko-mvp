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
        tinko: {
          teal: '#009CA6',
          orange: '#FF6F00',
          white: '#FFFFFF',
        },
        primary: {
          50: '#f0fdfe',
          100: '#ccf7f9',
          500: '#009CA6',
          600: '#008a93',
          700: '#007680',
        },
        secondary: {
          50: '#fff8f1',
          100: '#ffedd6',
          500: '#FF6F00',
          600: '#e66300',
          700: '#cc5700',
        }
      },
    },
  },
  plugins: [],
}
export default config