/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:    { DEFAULT: "#0891B2", light: "#22D3EE", dark: "#0E7490" },
        accent:     { DEFAULT: "#059669", light: "#34D399", dark: "#047857" },
        brand: {
          bg:       "#ECFEFF",
          fg:       "#164E63",
          muted:    "#E8F1F6",
          border:   "#A5F3FC",
        },
      },
      fontFamily: {
        heading: ["Figtree", "sans-serif"],
        body:    ["Noto Sans", "sans-serif"],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        "content": "1200px",
      },
      borderRadius: {
        "card": "1rem",
        "btn":  "0.625rem",
      },
      boxShadow: {
        "card":  "0 2px 16px 0 rgba(8,145,178,0.08)",
        "card-hover": "0 8px 32px 0 rgba(8,145,178,0.18)",
        "btn":   "0 4px 14px 0 rgba(8,145,178,0.30)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease-out both",
        "fade-in":   "fadeIn 0.4s ease-out both",
        "scale-in":  "scaleIn 0.35s ease-out both",
      },
      keyframes: {
        fadeUp:  { from: { opacity: 0, transform: "translateY(24px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        scaleIn: { from: { opacity: 0, transform: "scale(0.95)" }, to: { opacity: 1, transform: "scale(1)" } },
      },
    },
  },
  plugins: [],
};
