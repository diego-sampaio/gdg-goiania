/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // generate static files for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/gdg-goiania' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gdg-goiania/' : '',
  images: {
    unoptimized: true, // avoid image optimization
  },
};

module.exports = nextConfig;
