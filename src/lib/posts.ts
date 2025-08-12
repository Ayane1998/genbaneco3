// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

function resolvePostPath(slugOrFilename: string) {
  // 拡張子付きのときはそのまま、拡張子なしなら .mdx -> .md の順で探す
  if (/\.(mdx?|MDX?)$/.test(slugOrFilename)) {
    const full = path.join(postsDirectory, slugOrFilename);
    return fs.existsSync(full) ? full : null;
  }
  const mdx = path.join(postsDirectory, `${slugOrFilename}.mdx`);
  if (fs.existsSync(mdx)) return mdx;
  const md = path.join(postsDirectory, `${slugOrFilename}.md`);
  if (fs.existsSync(md)) return md;
  return null;
}

// スラッグの配列（拡張子は除去）
export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/i, ''));
}

export function getPostBySlug(slug: string) {
  const fullPath = resolvePostPath(slug);
  if (!fullPath) {
    throw new Error(`Post not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const isMdx = fullPath.toLowerCase().endsWith('.mdx');

  return {
    slug,
    meta: data,
    content,
    isMdx, // ← どちらか分かるように返す
  };
}

// .md のときだけ HTML 文字列を生成する（.mdx はページ側で MDX として扱う）
export async function getPostHtmlBySlug(slug: string) {
  const { content, isMdx, ...rest } = getPostBySlug(slug);

  if (isMdx) {
    // MDX はここで HTML にせず、そのまま返す
    return {
      ...rest,
      isMdx: true,
      contentSource: content,
      contentHtml: null as unknown as string, // 型合わせ（使わない）
    };
  }

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...rest,
    isMdx: false,
    contentSource: content,
    contentHtml,
  };
}

export function getPostMetaBySlug(slug: string) {
  const fullPath = resolvePostPath(slug);
  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  if (!data?.title || !data?.date) return null;

  return {
    title: data.title as string,
    date: data.date as string,
  };
}
