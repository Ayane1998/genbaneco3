// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import { Sawarabi_Gothic as SawarabiFont } from 'next/font/google'

// Tailwind v4 向け：CSS 変数に割り当て
const sawarabiGothic = SawarabiFont({
  weight: '400',
  subsets: ['latin'],   // 日本語グリフも含まれます
  display: 'swap',
  variable: '--font-sans',   // Tailwind の font-sans に紐付け
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={sawarabiGothic.variable}>
      {/* font-sans を body に付与して、--font-sans を全体に適用 */}
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}