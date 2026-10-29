import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  turbopack: {},
  outputFileTracingRoot: process.cwd(),
};
export default nextConfig;
