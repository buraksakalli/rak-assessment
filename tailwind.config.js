/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rak: {
          50: "#F48A8E",
          100: "#F27277",
          200: "#F05B60",
          300: "#ED4349",
          400: "#EB2C33",
          500: "#D21219",
          600: "#BA1016",
          700: "#A30E14",
          800: "#8C0C11",
          900: "#750A0E",
          DEFAULT: "#E9141C",
        },
      },
    },
  },
  plugins: [],
};
