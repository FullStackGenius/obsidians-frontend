/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
     proxyClientMaxBodySize : '100mb',
    serverActions: {
      bodySizeLimit: "100mb", // 👈 yahan increase karo
    },
  },
};

export default nextConfig;
