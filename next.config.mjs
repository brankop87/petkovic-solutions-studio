/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/preview/bella-spa',
        destination: '/previews/bella-spa/index.html',
      },
    ];
  },
};

export default nextConfig;
