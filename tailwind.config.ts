import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FA',
          100: '#CCF0F5',
          200: '#99E1EB',
          300: '#66D2E1',
          400: '#33C3D7',
          500: '#00A8C6',
          600: '#0891B2',
          700: '#066E87',
          800: '#044A5B',
          900: '#02272F',
        },
        navy: {
          50: '#E8EBF0',
          100: '#C5CCD9',
          200: '#9BA8BC',
          300: '#71849F',
          400: '#4A6282',
          500: '#2A4365',
          600: '#1E3A5F',
          700: '#152D4E',
          800: '#0D1F35',
          900: '#0A1628',
          950: '#050B14',
        },
        teal: {
          50: '#E6FAF8',
          100: '#CCF5F1',
          200: '#99EBE3',
          300: '#66E1D5',
          400: '#33D7C7',
          500: '#00CDB9',
          600: '#00B4A1',
          700: '#008A7B',
          800: '#006055',
          900: '#003630',
        },
        accent: {
          light: '#38BDF8',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;