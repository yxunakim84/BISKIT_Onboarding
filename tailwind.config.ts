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
    screens: {
      mobile: "0px",
      laptop: "700px",
      desktop: "1441px",
    },
    colors,
    fontSize,
    boxShadow,
    keyframes,
    animation,
  },
  plugins: [],
};
export default config;
