import type { Config } from "tailwindcss";
// const colors = require("./src/theme/colors");
const colors = require("./theme/colors");
const fontSize = require("./theme/fontSize");
const boxShadow = require("./theme/boxShadow");
const keyframes = require("./theme/keyframes");
const animation = require("./theme/animation");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "0px",
      mobile_m: "375px",
      laptop: "600px",
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
