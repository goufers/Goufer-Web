/** @type {import('tailwindcss').Config} */
 
 import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    // colors: {
    //   gouferGreen: "#007F00 ",
    // },
    extend: {},
  },
  plugins: [],
});
