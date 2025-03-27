import createMDX from '@next/mdx';
import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({});

const withContentLayer = withContentlayer(withMDX(nextConfig));

export default withContentLayer;
