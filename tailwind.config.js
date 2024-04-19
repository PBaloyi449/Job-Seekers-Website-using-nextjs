/**@type {import ('tailwindcss').Config} */
  module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ce00ff",
          secondary: "#0075ff",
          accent: "#005dff",
          neutral: "#0e2735",
          "base-100": "#fffaff",
          info: "#00d3ff",
          success: "#29a900",
          warning: "#f8ce00",
          error: "#ff0049",
          body : {
            "background-color": "#e3e6e6",
          }
        },
      },
    ],
  },
};

