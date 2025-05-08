/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["10px"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, #782671 28%, #7E256F 50%, #8F2269 80%, #9D2064 99%)",
      },
      colors: {
        text: {
          body: "#333333",
        },
        background: "#f5f4f4",
        cgray: {
          300: "#f5f4f4",
          500: "#f0f0f0",
          DEFAULT: "#CACACA",
        },
        primary: {
          DEFAULT: "#782671",
          700: "#9A2065",
        },
      },
    },
  },
  plugins: [],
};
