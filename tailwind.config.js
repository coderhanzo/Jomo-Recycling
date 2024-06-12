/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jomologo: "url('/src/assets/jasonotedola no-bg copy.png')",
        somepic: "url('/src/assets/painting-recycling.jpeg')",
      },
      colors: {
        newblue: "#01acec",
        darkBlue: "#14171A",
        darkGray: "#657786",
      },
    },
    plugins: [],
  },
};
