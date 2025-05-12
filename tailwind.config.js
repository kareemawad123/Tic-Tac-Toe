import preline from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js", // Preline content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    preline, // Preline plugin
  ],
};