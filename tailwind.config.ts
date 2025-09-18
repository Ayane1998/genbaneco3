// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}', // 記事フォルダ
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zen Kurenaido"', 'sans-serif'], // ← 全体の sans を Zen Kurenaido に
      },
    },
  },
  plugins: [], // ← v4では不要。globals.css 側で @plugin を使う
} satisfies Config
