/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sea': '#3971BC',
      },
    },
  },
  plugins: [],
};

export default config;