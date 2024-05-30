import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        "primary-dark": "#0D0D0D",
        "primary-light": "#F6F7EE",
      },
      textColor: {
        dark: "#0D0D0D",
        light: "#F6F7EE",
      },
      fontFamily: {
        // apfelGrotezk: ['ApfelGrotezk-Regular', 'sans-serif'],
        sans: ['var(--font-apfel)']
      },
    },
  },
  plugins: [],
};
export default config;
