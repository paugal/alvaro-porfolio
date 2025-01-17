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
        "bg-web": "#222c2a", //1D2221
        "bg-ui": "#2cc9aa",
        text: "#ffffffff",
        "text-inv": "#2f2f2fff",
        link: "#95A5F8",
      },
      boxShadow: {
        default: "0 3px 8px #00000040",
        //light: "0 6px 24px #DCDCDC0D, 0 0 0 1px #DCDCDC14",
        light: "0 6px 24px #2cc9aa17, 0 0 0 1px #2cc9aa14",
      },
      transitionProperty: {
        DEFAULT:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
