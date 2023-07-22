/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo-light-mode": "url('../assets/logo-white.svg')",
        "logo-dark-mode": "url('../assets/logo-black.svg')",
        "brook-40x40" : "url('../assets/brooklyn-simmons.png')",
        "arrow-icon" : "url('../assets/arrow-icon.svg')",
        "comment-icon" : "url('../assets/comment-icon.svg')",
        "eye-icon" : "url('../assets/akar-icons_eye.svg')",
        "laptop-img" : "url('../assets/laptop-image.png')",
        "filter-icon" : "url('../assets/filter-icon.svg')",
        "sort-icon" : "url('../assets/up-down-arrow-icon.svg')",
        "search-icon" : "url('../assets/search-icon.svg')",
        "floyd" : "url('../assets/floyd-miles.png')",
        "robert" : "url('../assets/robert-fox.png')",
        "nico" : "url('../assets/nico.png')",
        "imp-grid" : "url('../assets/implicit-grid.png')",
        "auto-grid" : "url('../assets/auto-grid.png')",
        "mdn" : "url('../assets/mdn.png')",
        "logs" : "url('../assets/logs.png')",
        "left-icon" : "url('../assets/left-icon.svg')",
        "right-icon" : "url('../assets/right-icon.svg')",
      },
      colors: {
        "nav-stroke": "#33322E",
        "hash-data" : "#3C47AE",
      },
    },
  },
  plugins: [],
};
