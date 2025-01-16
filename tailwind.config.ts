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
        default: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        light:
          "rgba(220, 220, 220, 0.05) 0px 6px 24px 0px, rgba(220, 220, 220, 0.08) 0px 0px 0px 1px;",
      },
    },
  },
  plugins: [],
} satisfies Config;
