// src/app/page.tsx
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Genbaneco</h1>
        <p className="text-lg">
          音楽大好き 毎日がげんばねこ案件な重工社員の日常「genbaneco」へようこそ。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">最新の投稿</h2>
        <ul className="space-y-2">
          <li>
            <a href="/blog/first-post" className="text-blue-600 hover:underline">
              初めての投稿
            </a>
            <span className="block text-sm text-gray-500">2025年7月21日</span>
          </li>
        </ul>
      </section>
    </main>
  );
}