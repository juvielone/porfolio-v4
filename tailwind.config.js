/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00ADB5",
          200: "#009DA5",
          300: "#008D95",
          400: "#007D85",
          500: "#006D75",
        },
      },
    },
  },
  plugins: [],
};
