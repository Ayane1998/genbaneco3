// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import { Zen_Kurenaido } from 'next/font/google'

// フォントを読み込み
const zenKurenaido = Zen_Kurenaido({
  weight: '400',        // Zen Kurenaido は 400 のみ
  subsets: ['latin'],   // 日本語もここでOK
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={zenKurenaido.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

