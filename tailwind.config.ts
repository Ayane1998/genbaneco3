// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tailwind v4 推奨：CSS 変数をフォントに使う
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [], // Typography は globals.css の @plugin で読み込み
} satisfies Config
