/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tedx-red': '#e62b1e',
        'tedx-red-hover': '#ff4444',
        'tedx-dark': '#222',
        'tedx-gray': '#f8f9fa',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        helvetica: ['var(--font-helvetica)'],
      },
    },
  },
  plugins: [],
}
