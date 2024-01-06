/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  output: "standalone",

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
