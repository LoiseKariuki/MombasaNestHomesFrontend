/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"], // scan all TS/JS files in src
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#115559",
        primaryHover: "#1C8A8F",
        secondary: "#1a6e71",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // added Montserrat
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};
