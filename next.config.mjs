/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ronwhitlock.com',
      },
    ],
  },
};

export default nextConfig;
