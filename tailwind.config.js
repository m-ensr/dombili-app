/** @type {import('tailwindcss').Config} */
import { COLORS } from "./constants/colors";

module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./App.{ts,tsx}",
    "./screens/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        interBold: ["Inter_700Bold"],

        space: ["SpaceGrotesk_400Regular"],
        spaceMedium: ["SpaceGrotesk_500Medium"],
        spaceSemi: ["SpaceGrotesk_600SemiBold"],
        spaceBold: ["SpaceGrotesk_700Bold"],
      },

      colors: {
        "background-app": COLORS.background.app,
        "background-surface": COLORS.background.surface,
        "background-surface-elevated": COLORS.background.surfaceElevated,
        "text-primary": COLORS.text.primary,
        "text-secondary": COLORS.text.secondary,
        "border-card": COLORS.border.card,
        "border-divider": COLORS.border.divider,
        "accent-primary": COLORS.accent.primary,
        "accent-blue": COLORS.accent.blue,
        "accent-gold": COLORS.accent.gold,
      },

      fontSize: {
        // semantic sizes (font bağımsız)
        "title-sm": ["14px", { lineHeight: "20px" }],
        "title-md": ["18px", { lineHeight: "24px" }],
        "title-lg": ["24px", { lineHeight: "32px" }],
        "title-xl": ["32px", { lineHeight: "40px" }],
      },
    },
  },
  plugins: [],
};
