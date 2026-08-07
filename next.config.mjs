/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Тест уровня переехал внутрь направления: в корне сайта он читался как
      // тест всей платформы, хотя проверяет только английский.
      {
        source: "/placement",
        destination: "/track/english/placement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
