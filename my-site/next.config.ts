// next.config.ts
import withMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMdx = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // 他にも追加したい config があればここに記述可能
};

export default withMdx(nextConfig);
