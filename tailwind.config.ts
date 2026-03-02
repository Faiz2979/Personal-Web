/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-koho)"],
      },
      colors: {
        primary: {
          DEFAULT: "#c51f1f",
          dark: "#991b1b",
          deep: "#7f1d1d",
        },
        black: {
          DEFAULT: "#0f0f0f",
          soft: "#1a1a1a",
          border: "#262626",
        },
        white: {
          DEFAULT: "#f5f5f5",
          soft: "#e5e5e5",
          border: "#d4d4d4",
        }
      },
    }
  },
  plugins: [],
}