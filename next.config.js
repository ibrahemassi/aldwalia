/** @type {import('next').NextConfig} */
const path = require('path');

// GitHub Pages project site: https://ibrahemassi.github.io/aldwalia/
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/aldwalia' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
