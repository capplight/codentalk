import type { MetadataRoute } from "next";
import { courses } from "@/courses";
import { napravleniya } from "@/courses/napravleniya";

const BASE = "https://codentalk.kz";

/**
 * Карта сайта: только страницы, открытые всем.
 *
 * Здесь главная, направления со ступенями и состав каждой ступени. По ним
 * человек решает, идти ли учиться, — им и место в поиске.
 *
 * УРОКОВ ЗДЕСЬ БОЛЬШЕ НЕТ, И ЭТО НЕ УПУЩЕНИЕ. С 16 августа урок открывается
 * только после входа. Раньше в карте стояли все двести с лишним уроков, и
 * после закрытия каждый из них стал отвечать поисковику перенаправлением на
 * страницу входа. Звать робота туда, откуда его развернут, — только тратить
 * его обход и своё место в выдаче.
 *
 * По той же причине сюда не попадают проверочные работы и экзамен.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [{ url: BASE, priority: 1 }];

  for (const napravlenie of napravleniya) {
    urls.push({ url: `${BASE}/napravlenie/${napravlenie.slug}`, priority: 0.9 });
  }

  for (const course of courses) {
    urls.push({ url: `${BASE}/learn/${course.slug}`, priority: 0.8 });
  }

  return urls;
}
