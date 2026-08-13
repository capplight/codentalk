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

      /*
       * Служебные адреса выкладки ведут на собственный домен.
       *
       * Зачем: пока адресов два, один и тот же урок доступен по двум ссылкам.
       * Поисковики считают это разными страницами, а ученики расходятся по
       * разным адресам — и ссылка, которой поделились, ведёт не туда, куда
       * ждут. Постоянное перенаправление (301) говорит и тем и другим, что
       * адрес один.
       *
       * Перечислены поимённо, а не образцом `*.vercel.app`: у каждой выкладки
       * есть свой служебный адрес вида codentalk-abc123….vercel.app, и по нему
       * проверяют сборку до того, как она станет боевой. Общий образец закрыл
       * бы и его.
       *
       * statusCode: 301, а не permanent: true — Next.js на permanent отвечает
       * кодом 308, а владелец просил именно 301.
       */
      ...["codentalk.vercel.app", "codentalk-nauryzbeks-projects-75b67797.vercel.app"].map(
        (host) => ({
          source: "/:path*",
          has: [{ type: "host", value: host }],
          destination: "https://codentalk.kz/:path*",
          statusCode: 301,
        })
      ),
    ];
  },
};

export default nextConfig;
