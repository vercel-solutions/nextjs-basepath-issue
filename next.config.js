/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/d/service-hub",
  assetPrefix: "/d/service-hub",
  experimental: {
    swcPlugins: [],
    serverActions: true,
    instrumentationHook: true,
    forceSwcTransforms: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
