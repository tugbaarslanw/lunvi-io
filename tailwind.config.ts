import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0818",
        primary: "#8853ff",
        accent: "#41e2c0"
      },
      borderRadius: {
        xl: "1.4rem"
      }
    }
  },
  plugins: []
};
export default config;
