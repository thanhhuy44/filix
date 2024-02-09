/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: 'https://movie-data-crawl.vercel.app/api',
  },
  images: {
    domains: ['https://img.flixhq.to/**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.flixhq.to',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
