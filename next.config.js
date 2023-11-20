/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/slides/:path*",
        destination: "http://localhost:5000/api/slides/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
