/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/noise.png')",
      },

      colors: {
        "semi-gray": "#CFCFCF",
        "text-primary": "#525252",
        "dark-semi-gray": "#666666",
        "button-blue": "rgb(81, 53, 255)",
        "blue-primary": "#5135FF",
        "double-quote": "rgba(81, 53, 255, 0.1)",
        "light-gray": "#F6F6F6",
      },

      fontFamily: {
        montHavy: "Monthavy",
        "montHavy-extralight": "Monthavy-extralight",
        montSemiBold: "MontsemiBold",
        montBold: "MontBold",
      },

      fontSize: {
        "4.5xl": "40px",
        xsm: "12px",
        slg: "20px",
      },
    },
  },
  plugins: [],
};
