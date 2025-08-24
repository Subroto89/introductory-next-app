/** @type {import('tailwindcss').Config} */
module.exports = {
  // Crucial for dark mode with next-themes
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Include src directory if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
