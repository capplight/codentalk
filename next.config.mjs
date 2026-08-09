/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      /*
       * Страницы первой версии удалены вместе с её содержанием: оно было
       * написано без учебников и заменяется новым. Ссылки на них могли
       * разойтись, поэтому вместо «страница не найдена» ведём в каталог.
       *
       * Перенаправления временные (permanent: false): когда новых курсов
       * станет больше, часть старых адресов, возможно, получит замену по
       * смыслу, и постоянное перенаправление помешало бы.
       */
      { source: "/placement", destination: "/", permanent: false },
      { source: "/track/:path*", destination: "/", permanent: false },
      { source: "/course/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
