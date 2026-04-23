/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8f8",
          100: "#d5f0f0",
          200: "#b0e2e3",
          300: "#82d0d3",
          400: "#4eb7bc",
          500: "#2f9ba1",
          600: "#267d84",
          700: "#22656a",
          800: "#215256",
          900: "#1f4548",
        },
      },
    },
  },
  plugins: [],
};
