import Link from 'next/link'
import { getPostSlugs, getPostMetaBySlug } from '@/lib/posts'

export default async function Home() {
  // Markdown ファイル一覧を取得
  const slugs = getPostSlugs()

  // 各記事のメタ情報（タイトル・日付など）を読み込む
  const posts = slugs
    .map((slug) => {
      const meta = getPostMetaBySlug(slug)
      return meta ? { slug, ...meta } : null
    })
    .filter((p): p is { slug: string; title: string; date: string } => !!p)
    // 新しい順にソート
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Genbaneco</h1>
        <p className="text-lg">
          音楽大好き。毎日がげんばねこ案件なGenbanecoの日常へようこそ
        </p>
        <p className="text-lg mt-2 text-gray-700">
          （時々、改修工事失敗してエラーが出るかもしれません。ご愛嬌で♡）
        </p>

        <p className="text-lg mt-2 text-gray-700">
          各種お問い合わせは、X（旧Twitter）または Instagram のDMまで!
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://x.com/rg16dr8c9qcEh4y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-label="X（旧Twitter）でDM"
          >
            XでDMする（@rg16dr8c9qcEh4y）
            <span className="ml-1" aria-hidden>
              →
            </span>
          </a>

          <a
            href="https://instagram.com/genbaneko1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-label="InstagramでDM"
          >
            InstagramでDMする（@genbaneko1998）
            <span className="ml-1" aria-hidden>
              →
            </span>
          </a>
        </div>
      </section>

      {/* 自動で記事リストを生成 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">最新の投稿</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <span className="block text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('ja-JP')}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
