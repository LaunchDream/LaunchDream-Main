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
        background: "#060608",
        surface: "#0E0E12",
        "surface-2": "#16161C",
        "surface-3": "#1E1E26",
        "text-primary": "#F2EFE8",
        "text-secondary": "#9896A0",
        "text-muted": "#52505A",
        gold: "#D4A843",
        "gold-light": "#F0C866",
        "gold-dark": "#A07828",
        cyan: "#4DE1C1",
        "cyan-dark": "#1A9E88",
        "border-subtle": "#1A1A22",
        "border-medium": "#28283A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 9vw, 8rem)", { lineHeight: "0.93", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "0.97", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2.2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.6rem, 2.8vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section": "8rem",
        "section-sm": "5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
