import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.93", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.8rem, 5.5vw, 5rem)", { lineHeight: "0.97", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.2rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.1rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      spacing: { section: "7rem", "section-sm": "4.5rem" },
      boxShadow: {
        card: "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)",
        "card-hover": "0 4px 16px rgba(15,23,42,0.1), 0 16px 40px rgba(15,23,42,0.07)",
        "blue": "0 0 0 3px rgba(37,99,235,0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseSoft: { "0%,100%": { opacity: "0.6" }, "50%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};
export default config;
