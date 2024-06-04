import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '12rem',
    },
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
        sans: ['var(--font-apfel)']
      },
    },
  },
  plugins: [],
};
export default config;
