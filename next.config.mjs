/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ❌ Turn off Turbopack
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  reactStrictMode: true,
  devIndicators: false,
};

export default nextConfig;
