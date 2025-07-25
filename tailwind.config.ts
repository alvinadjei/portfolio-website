import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000e1a',
        lightbg: '#001a30',
        tiel: '#1bfad5',
        fadedtiel:'#0c6e5d',
        lightgrey: '#c5c6c7',
      },
    },
  },
  plugins: [],
} satisfies Config;
