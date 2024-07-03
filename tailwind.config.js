/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // model1: "url('src/assets/model-1.jpg')",
        // model2: "url('src/assets/model-2.jpg')",
        // model3: "url('src/assets/model-3.jpg')",
        // opinionsImg: "url('src/assets/opinions.jpg')",
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#353D21",
        bg: "#D9E1C2",
        accent: "#436840",
        fade: "#C1CAA8",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
