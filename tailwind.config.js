/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",      // indigo — change to your preferred color
        secondary: "#a78bfa",    // violet
        background: "#0a0a0a",
        glass: "rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};