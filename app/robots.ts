import type { MetadataRoute } from "next";

// Сайт пока скрыт от поисковиков. При публичном запуске поменять на allow: "/"
// и вернуть sitemap (см. историю), а также убрать блок robots в app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
