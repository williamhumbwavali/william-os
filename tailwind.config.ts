import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0F14",
        panel: "#0F141B",
        panelAlt: "#0C1017",
        line: "#1E2733",
        lineSoft: "#161D26",
        ink: "#E6EDF3",
        muted: "#7C8A9C",
        mutedDark: "#586372",
        cyan: "#5CCFE6",
        amber: "#E8B04B",
        purple: "#C792EA",
        green: "#7FD88F",
        red: "#F27878",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(92,207,230,0.15), 0 0 24px rgba(92,207,230,0.08)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        rise: "rise 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
