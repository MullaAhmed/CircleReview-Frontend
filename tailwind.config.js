/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1F2A37',
        'light': '#F5F5F5',
        'selected-font': '#1F2A37',
        'unselected-font': '#9CA3AF',
        'border-color': '#374151',
        'scrollbar-thumb': '#dddddd',
        'scrollbar-track': '#414753',
        'button-blue': '#1A56DB',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
