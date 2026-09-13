/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0F0E0C",
        panel: "#17160F",
        panel2: "#1D1B14",
        line: "#2E2B21",
        line2: "#3A362A",
        paper: "#ECE6D6",
        muted: "#9A9078",
        faint: "#67604C",
        amber: {
          DEFAULT: "#D4922B",
          soft: "#E8B564",
          dim: "#8A5F1E",
        },
        teal: {
          DEFAULT: "#4F8C82",
          soft: "#7FB2A8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #211F17 1px, transparent 1px), linear-gradient(to bottom, #211F17 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
