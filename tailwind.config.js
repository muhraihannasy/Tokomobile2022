/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_primary: "#D8D8D8",
        primary: "#3EBB8D",
        primary_dark: "#2A8F6A",
        secondary: "#EEC04F",
        green2: "#D2FAEB",
        tx_dark: "#666666",
        tx_green: "#2A8F6A",
        tx_red: "#E86F6F",
      },
    },
  },
  plugins: [],
};
