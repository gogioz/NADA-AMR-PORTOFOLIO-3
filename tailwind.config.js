/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { moss: "#436B5C", deep: "#2A453A", blush: "#EFBBBD", pale: "#F8DDE0", sage: "#A8BBAE", cream: "#FFF8F1", paper: "#FFF8F1", ink: "#1E2B26", muted: "#5F7068" },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-text)", "Georgia", "serif"],
      },
      keyframes: {
        rise: { from: { opacity: 0, transform: "translateY(40px)" }, to: { opacity: 1, transform: "none" } },
        float: { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(-20px,24px)" } },
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        rise: "rise 1s cubic-bezier(.2,.7,.2,1) both",
        float: "float 12s ease-in-out infinite",
        fade: "fade .3s ease-out both",
      },
    },
  },
  plugins: [],
};
