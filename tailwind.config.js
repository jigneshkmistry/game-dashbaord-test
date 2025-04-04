/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            sans: ["Gilroy", "sans-serif"], // Override the default sans-serif font
          },
      },
    },
    plugins: [],
  };
  