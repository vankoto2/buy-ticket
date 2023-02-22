module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FE6F61',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
