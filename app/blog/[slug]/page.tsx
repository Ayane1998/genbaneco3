// app/blog/[slug]/page.tsx
import { getPostHtmlBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostHtmlBySlug(slug)
  if (!post) notFound()

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.meta.date).toLocaleDateString('ja-JP')}
      </p>

      {/* Markdown本文：幅上限を 80ch に拡張し、中央に配置。行間は少し詰める */}
      <div className="prose prose-lg leading-snug mx-auto max-w-[80ch]">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </article>
  )
}
