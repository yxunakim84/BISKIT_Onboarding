import type { Config } from "tailwindcss";
const colors = require("./src/theme/colors");
const fontSize = require("./src/theme/fontSize");
const boxShadow = require("./src/theme/boxShadow");
const keyframes = require("./src/theme/keyframes");
const animation = require("./src/theme/animation");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    fontSize,
    boxShadow,
    keyframes,
    animation,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
