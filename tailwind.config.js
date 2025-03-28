/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from "fluid-tailwind";

export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        worksans: "Work Sans",
      },
    },
  },
  plugins: [fluid],
};
