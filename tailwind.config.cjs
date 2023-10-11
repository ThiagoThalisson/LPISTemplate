/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#33EEFF",
          base: "#00BBCC",
          dark: "#24868F",
          darkest: "#1C464A",
        },
        primary: {
          light: "#6666FF",
          base: "#5252E0",
          dark: "#4040BF",
          darkest: "#1C1C4A",
        },
      },
    },
  },
  plugins: [],
}
