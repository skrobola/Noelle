import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "var(--paper)",
        sky: {
          DEFAULT: "var(--sky)",
          deep: "var(--sky-deep)",
        },
        ink: {
          DEFAULT: "var(--foreground)",
          muted: "var(--ink-muted)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
        },
        "whisper-blue": {
          DEFAULT: "#b7e5fa",
          light: "rgba(183, 229, 250, 0.35)",
          lighter: "rgba(183, 229, 250, 0.15)",
          deep: "#2a6f8a",
          deeper: "#1b4c5c",
          darker: "#1b4c5c",
          dark: "#2a6f8a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(27, 76, 92, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
