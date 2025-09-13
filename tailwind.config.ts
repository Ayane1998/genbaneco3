// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // 併用しているなら
    './src/**/*.{js,ts,jsx,tsx,mdx}',   // 使っているなら
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
