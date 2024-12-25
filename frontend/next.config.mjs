/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets.aceternity.com',
      'images.unsplash.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andrewdangspersonalphotos.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
