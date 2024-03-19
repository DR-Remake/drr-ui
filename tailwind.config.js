/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "drr-logo": "url('/src/assets/drr-logo.png')",
        "main-layout": "url('/src/assets/main-bg.jpg')"
      }
    }
  },
  plugins: []
};
