
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
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        carousel: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
        'draw-path': {
          '0%': { strokeDashoffset: '2000' },
          '100%': { strokeDashoffset: '0' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
        'carousel': 'carousel 40s linear infinite',
        'draw-path': 'draw-path 3s ease-in-out forwards infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused !important',
        }
      })
    }
  ],
} satisfies Config;
