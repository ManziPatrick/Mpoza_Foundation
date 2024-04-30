/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#306756",
          "200": "#414141",
        },
        whitesmoke: "#f3f4f6",
        gray: {
          "100": "#1f2937",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(0, 0, 0, 0.9)",
        },
        steelblue: "#0284c7",
        cadetblue: "#71a6b6",
        dimgray: "#555",
        saddlebrown: "#89540d",
        gainsboro: "#e8e6e6",
        black: "#000",
        darkcyan: {
          "100": "rgba(57, 139, 132, 0.8)",
          "200": "rgba(57, 139, 132, 0.9)",
        },
        darkgoldenrod: "#bf8826",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "montserrat-alternates": "'Montserrat Alternates'",
        "source-serif-pro": "'Source Serif Pro'",
        arial: "Arial",
      },
      borderRadius: {
        "81xl": "100px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "11xl": "30px",
      "41xl": "60px",
      "21xl": "40px",
      "61xl": "80px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
