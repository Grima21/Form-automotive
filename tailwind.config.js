/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerP: "#DBEAFE",
        subColor: "#4B5563",
        h2Color: "#111827",
        labelColor: "#374151",
        bgForm: "#2563EB",
        bgBlue: "#DBEAFE",
        bgGreen: "#DCFCE7",
        bgYellow: "#FEF9C3",
        bgPurple: "#F3E8FF",
      },
    },
  },
  plugins: [],
};
