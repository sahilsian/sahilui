import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com']
  }
};

export default nextConfig;
