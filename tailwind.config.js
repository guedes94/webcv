/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        "layout-padding": "4rem",
      },
      colors: {
        "custom-white": "#ffffff",
        "custom-purple": "#6b21a8",
        "custom-gray": "#374151",
      },
      spacing: {
        8: "2rem",
      },
    },
  },
  plugins: [],
};
