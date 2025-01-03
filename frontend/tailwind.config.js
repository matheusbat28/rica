/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sea': '#3971BC',
        'sea2': '#0D94C6',
      },
    },
  },
  plugins: [],
};

export default config;