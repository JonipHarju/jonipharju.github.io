/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Background Colors
        pageBg: "#fff", // Light mode background
        pageBgDark: "#000", // Dark mode background

        // Text Colors
        textMain: "#111827", // Light mode text
        textMainDark: "#e5e7eb", // Dark mode text
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Register Roboto as the default sans-serif font
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
