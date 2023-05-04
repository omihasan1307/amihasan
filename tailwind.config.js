/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textColor: "#9951E6",
      },
      backgroundColor: {
        btnColor: "#9951E6",
        bgblur: "#F0EFF5",
        footer: "#7D6AE9",
      },
      minHeight: {
        myHeight: "85vh",
      },
    },
  },
  plugins: [require("daisyui")],
};
