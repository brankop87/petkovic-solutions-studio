/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Optimizacija slika (kada povežemo Sanity)
  images: {
    domains: ["cdn.sanity.io"], // Sanity koristi ovaj CDN za slike
    formats: ["image/avif", "image/webp"],
  },

  // ✅ Uklanja console.log u produkciji
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Ignoriše ESLint greške prilikom build-a
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Sprečava da build puca ako neki tip fali
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
