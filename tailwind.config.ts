import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
      },
      keyframes: {
        scanline: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.95" },
        },
        "scan-flicker": {
          "0%, 100%": { opacity: "0.88" },
          "48%": { opacity: "0.55" },
          "52%": { opacity: "0.92" },
        },
      },
      animation: {
        scanline: "scanline 3.4s ease-in-out infinite",
        "scan-flicker": "scan-flicker 4.2s ease-in-out infinite",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
} satisfies Config
