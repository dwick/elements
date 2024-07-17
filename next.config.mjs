/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.CI ? '/elements' : '',
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
