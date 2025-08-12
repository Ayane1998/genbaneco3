// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/i, ''));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);
  return { slug, meta: data, content };
}

export async function getPostHtmlBySlug(slug: string) {
  const { content, ...rest } = getPostBySlug(slug);
  const processed = await remark().use(html).process(content);
  return { ...rest, contentHtml: processed.toString() };
}

export function getPostMetaBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
  if (!data?.title || !data?.date) return null;
  return { title: String(data.title), date: String(data.date) };
}
