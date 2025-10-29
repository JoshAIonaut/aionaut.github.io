/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Statischer Export für GitHub Pages
  output: 'export'
};

module.exports = nextConfig;
