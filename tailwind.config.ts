import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Play Panda brand palette (8 colors). No colors outside this palette.
        coral: "#FF613A",
        green: "#009D72",
        yellow: "#FFBB01",
        purple: "#8061BE",
        teal: "#01C9C7",
        pink: "#FF7EBE",
        brown: "#D06F28",
        ink: "#000000",
        cream: "#FFF8EC", // tint, derived from yellow
      },
      fontFamily: {
        display: ["var(--font-hank)", "ui-rounded", "system-ui", "sans-serif"],
        body: ["var(--font-hank)", "ui-rounded", "system-ui", "sans-serif"],
      },
      borderRadius: {
        chunk: "1.75rem",
        pill: "9999px",
      },
      boxShadow: {
        chunk: "0 10px 0 0 rgba(0,0,0,0.08)",
        chunkHover: "0 14px 0 0 rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
