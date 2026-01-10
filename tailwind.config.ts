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
        'whisper-blue': {
          DEFAULT: '#b7e5fa', // rgb(183, 229, 250) - primary brand color
          light: 'rgba(183, 229, 250, 0.25)', // for backgrounds
          lighter: 'rgba(183, 229, 250, 0.1)', // very light backgrounds
          dark: 'rgb(113, 154, 173)', // darker variant for hover
          darker: 'rgb(27, 76, 92)', // even darker for active states
        },
      },
    },
  },
  plugins: [],
};
export default config;
