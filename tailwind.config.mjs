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

        // Primary Colors
        primary: "#6b7280", // Light mode primary
        primaryDark: "#9ca3af", // Dark mode primary

        // Accent Colors
        accent: "#10b981", // Light mode accent (green)
        accentDark: "#34d399", // Dark mode accent (lighter green)

        // Secondary Accent Colors
        secondaryAccent: "#3b82f6", // Light mode secondary (blue)
        secondaryAccentDark: "#60a5fa", // Dark mode secondary (lighter blue)

        // Button Background Colors
        buttonBg: "#e5e7eb", // Light mode button background
        buttonBgDark: "#374151", // Dark mode button background
      },
    },
  },
  plugins: [],
};
