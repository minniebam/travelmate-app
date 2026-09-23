import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#172554",
        purple: "#6B4EFF",
        rose: "#FF6B8A",
        mist: "#F5F7FF",
        slateglass: "rgba(15, 23, 42, 0.15)",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(23, 37, 84, 0.12)",
      },
      backgroundImage: {
        aurora: "radial-gradient(circle at top left, rgba(107, 78, 255, 0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 107, 138, 0.25), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
