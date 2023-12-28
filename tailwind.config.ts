import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-yellow": "hsl(47, 88%, 63%)",
      "neutral-white": "hsl(0, 0%, 100%)",
      "neutral-black": "hsl(0, 0%, 7%)",
      "neutral-gray": "hsl(0, 0%, 41%)",
    },
    extend: {
      boxShadow: {
        card: "7px 7px 0px 0px rgba(0, 0, 0, 0.93)",
      },
    },
  },
  plugins: [],
};
export default config;
