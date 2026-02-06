/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "getinside-ops.github.io",
      },
    ],
  },
};

export default nextConfig;
