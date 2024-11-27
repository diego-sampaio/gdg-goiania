/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // generate static files for GitHub Pages
  basePath: '/gdg-goiania',
  assetPrefix: '/gdg-goiania/',
  images: {
    unoptimized: true, // avoid image optimization
  },
};

module.exports = nextConfig;
