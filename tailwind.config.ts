import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow Condensed, sans-serif",
        busorama: "Busorama, serif",
        blatant: "Blatant, sans-serf",
        retro: "RetroCouture, serif",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyellow: "var(--yellow)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
        dblue: "var(--dblue)",
        ldblue: "var(--ldblue)",
        pink: "#E888A4",
        lblue: "#EEF3FF",
        lpink: "#FFDAE5",
        dlblue: "#B1C3EE",
      },
    },
  },
  plugins: [],
};
export default config;
