import Link from 'next/link'
import { getPostSlugs, getPostMetaBySlug } from '@/lib/posts'

type PostMeta = {
  slug: string
  title: string
  date: string
}

export default async function Home() {
  // 記事ファイル一覧を取得
  const files = getPostSlugs()

  // 各記事のタイトル・日付・slugを取得
  const posts: PostMeta[] = files
    .map((fileName: string) => {
      // first-post.mdx → first-post
      const slug = fileName.replace(/\.mdx?$/, '')

      const meta = getPostMetaBySlug(slug)

      if (!meta) {
        return null
      }

      return {
        slug,
        title: String(meta.title),
        date: String(meta.date),
      }
    })
    .filter((post): post is PostMeta => post !== null)

  // 新しい記事を上に並べる
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Genbaneco
        </h1>

        <p className="text-lg">
          音楽大好き。毎日がげんばねこ案件なGenbanecoの日常へようこそ
        </p>

        <p className="text-lg mt-2 text-gray-700">
          （時々、改修工事失敗してエラーが出るかもしれません。ご愛嬌で♡）
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          最新の投稿
        </h2>

        <ul className="space-y-4">
          {sortedPosts.map((post) => (
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