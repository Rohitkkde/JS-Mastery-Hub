
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3658D3",
          foreground: "hsl(var(--primary-foreground))",
        },
        black: "#0E0E0E",
        white: "#FFFFFF",
        blue: {
          light: "#70A2E1",
          dark: "#3658D3",
        },
        yellow: {
          mango: "#FFD37D",
          lemon: "#F7DF1E",
        },
        orange: "#F57642",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
