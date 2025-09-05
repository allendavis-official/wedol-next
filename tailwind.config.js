/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wedol: {
          50: "#f6fffb",
          100: "#ecfff6",
          500: "#059669", // adjust to brand
        },
      },
    },
  },
  plugins: [],
};
