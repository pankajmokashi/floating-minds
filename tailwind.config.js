/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
      },
      screens: { xm: "450px" },
      aspectRatio: {
        "16/10": "16/10",
      },
    },
  },
  plugins: [],
};
