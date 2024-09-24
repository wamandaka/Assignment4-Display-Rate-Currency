/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d5d4",

          secondary: "#c4c900",

          accent: "#00f8ff",

          neutral: "#301c2b",

          "base-100": "#292929",

          info: "#00e7ff",

          success: "#00b186",

          warning: "#F06D38",

          error: "#ff435c",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
