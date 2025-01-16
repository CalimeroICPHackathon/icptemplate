import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // This is needed because GitHub Pages does not support Next.js optimized images
  },
};

export default withTM(['@calimero-is-near/calimero-p2p-sdk'])(nextConfig);
