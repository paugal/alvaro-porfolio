import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-futura)"],
      },
      colors: {
        "bg-web": "#1D2221",
        "bg-ui": "#FFFFFF",
        text: "#FFFFFF",
        "text-inv": "#000000",
        link: "#95A5F8",
      },
      boxShadow: {
        default: "0 3px 8px #00000040",
        light: "0 6px 24px #DCDCDC0D, 0 0 0 1px #DCDCDC14",
      },
    },
  },
  plugins: [],
} satisfies Config;
