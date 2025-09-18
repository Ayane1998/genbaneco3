// app/blog/[slug]/page.tsx
import { getPostHtmlBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
  // ← 既存プロジェクトの想定に合わせて Promise で受ける
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  // ← Promise なので await が必要
  const { slug } = await params

  const post = await getPostHtmlBySlug(slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.meta.date).toLocaleDateString('ja-JP')}
      </p>

      {/* ← Typography を効かせるために prose を付与 */}
      <div className="prose prose-lg leading-loose">
        {post.contentHtml ? (
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        ) : (
          <p>本文がありません</p>
        )}
      </div>
    </article>
  )
}

