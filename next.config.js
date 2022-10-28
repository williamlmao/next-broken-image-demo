/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**.amazonaws.com",
      },
      {
        hostname: "www.notion.so",
      },
      {
        hostname: "**.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
