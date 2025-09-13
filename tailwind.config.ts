// tailwind.config.ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/**/*.{js,ts,jsx,tsx,mdx}',   
    './content/**/*.{md,mdx}', // ← 記事フォルダも忘れずに
  ],
  theme: {
    extend: {},
  },
  plugins: [typography()],  // ← ここがポイント
} satisfies Config

