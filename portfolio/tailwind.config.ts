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
      '5xl': '3.052rem',
      'giant': '6rem'
    },
    screens: {
      'xs': '200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        "primary-dark": "#000000",
        "primary-light": "#FFFFFF",
        "secondary-dark" : "#181818",
        "secondary-light": "#444444"
      },
      textColor: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-apfel)']
      },
    },
  },
  plugins: [],
};
export default config;
