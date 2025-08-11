import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-center py-6">
      {/* サイトタイトル */}
      <h1 className="text-3xl font-bold mb-4">Genbaneco</h1>

      {/* ナビゲーション */}
      <nav>
        <div className="flex justify-center gap-10 text-lg">
          <Link href="/" className="hover:text-gray-600 no-underline">
            ホーム
          </Link>
          <Link href="/profile" className="hover:text-gray-600 no-underline">
            プロフィール
          </Link>
          <Link href="/blog" className="hover:text-gray-600 no-underline">
            ブログ
          </Link>
          <Link href="/contact" className="hover:text-gray-600 no-underline">
            コンタクト
          </Link>
        </div>
      </nav>
    </header>
  );
}
