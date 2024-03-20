/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e0808",
        border: "#8d8b8c"
      },
      backgroundImage: {
        "drr-logo": "url('/src/assets/drr-logo.png')",
        "main-layout": "url('/src/assets/main-bg.jpg')",
        footer: "url('/src/assets/footer-bg.png')",
        modal: "url('/src/assets/modal-bg.png')"
      }
    }
  },
  plugins: []
};
