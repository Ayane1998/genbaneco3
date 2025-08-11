import Link from 'next/link';
import { getPostSlugs, getPostMetaBySlug } from '@/lib/posts';

type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

export default async function BlogListPage() {
  const slugs = getPostSlugs();

  const posts: PostMeta[] = slugs
    .map((slug: string) => {
      const meta = getPostMetaBySlug(slug.replace(/\.md$/, ''));
      if (!meta) return null;
      return {
        ...meta,
        slug: slug.replace(/\.md$/, ''),
      };
    })
    .filter((post): post is PostMeta => post !== null); // ← 型ガード

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">ブログ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <div className="text-xl text-blue-600 hover:underline">{post.title}</div>
              <div className="text-sm text-gray-500">
  {new Date(post.date).toLocaleDateString('ja-JP')}
</div>


            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
