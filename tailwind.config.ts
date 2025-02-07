import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        darkyellow: "#FF9F0D",
        lightgreen: "#999966",
        leafgreen: "#195A00",
        lightyellow: "#AF872F",
        primarycoffe: "#BC9A6C",
        secondarycofee: "#EDEAE3",
        coloricon: "#4F4F4F",
        bgblack: "#0D0D0D",
        cheftextcolor: "#333333",
        grayborder: "#94959B",
        inputshadow: "#C4C4C4",
        gray3: "#828282",
        gray5: "#E0E0E0",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
