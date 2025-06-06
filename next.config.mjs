/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nodejs-backend-starter.vercel.app/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
