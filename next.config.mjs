/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/skills',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/work',
        destination: '/coming-soon',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
