/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/product-images/**',
      },
    ],
    // handle internet image
    // image size
    unoptimized:true
  },
};
export default nextConfig;

