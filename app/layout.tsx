// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import { Zen_Kurenaido } from 'next/font/google'

// Tailwind v4 向け：CSS 変数に割り当て
const zenKurenaido = Zen_Kurenaido({
  weight: '400',
  subsets: ['latin'],   // Zen 系はこれでOK（日本語グリフも含まれます）
  display: 'swap',
  variable: '--font-sans',   // ← ここがポイント
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={zenKurenaido.variable}>
      {/* font-sans を body に付与して、--font-sans を全体に適用 */}
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}
