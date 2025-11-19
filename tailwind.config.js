/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      dropShadow: {
        soft: "0 2px 6px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#194670",
        "sub-text": "#F3F4F6",
        "footer-text": "#E2E8F0",
        shape: "#DBEAFE",
        shape2: "#60A5FA",
      },
    },
  },
  plugins: [],
};
