import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// @ts-expect-error: no types
import { remark } from 'remark';
// @ts-expect-error: no types
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

// .mdx も対象にする
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export async function getPostHtmlBySlug(slug: string) {
  const { content, ...rest } = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    ...rest,
    contentHtml,
  };
}

export function getPostMetaBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  if (!data.title || !data.date) return null;

  return {
    title: data.title,
    date: data.date,
  };
}
