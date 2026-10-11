/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages: `npm run build` writes the whole site to ./out
  output: "export",
  // Empty with a custom domain; "/paic-website" when served from paic-pitt.github.io/paic-website.
  // The deploy workflow sets this for us.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // No server to resize images on GitHub Pages
  images: { unoptimized: true },
};

export default nextConfig;
