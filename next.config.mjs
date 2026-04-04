/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      new URL("https://tailwindui.com"),
      new URL("https://images.unsplash.com"),
    ],
  },
};

export default nextConfig;
