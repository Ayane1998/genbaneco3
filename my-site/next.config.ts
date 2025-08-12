// next.config.ts
import withMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMdx = withMDX({
  extension: /\.mdx?$/,
});

// リポジトリ名（例: genbaneco）
const repoName = 'genbaneco';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export', // 静的HTML出力
  basePath: `/${repoName}`, // GitHub Pages用ベースパス
  images: {
    unoptimized: true, // GitHub Pagesで画像最適化を無効化
  },
};

export default withMdx(nextConfig);
