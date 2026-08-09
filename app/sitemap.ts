import type { MetadataRoute } from "next";
import { courses, lessonsInOrder } from "@/courses";

const BASE = "https://codentalk.kz";

/**
 * Карта сайта: главная, курсы и их уроки.
 *
 * Проверочные работы и экзамен сюда не попадают намеренно: они требуют входа и
 * пройденных уроков, поисковой системе там показывать нечего.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [{ url: BASE, priority: 1 }];

  for (const course of courses) {
    urls.push({ url: `${BASE}/learn/${course.slug}`, priority: 0.9 });
    for (const { lesson } of lessonsInOrder(course)) {
      urls.push({ url: `${BASE}/learn/${course.slug}/${lesson.slug}`, priority: 0.6 });
    }
  }

  return urls;
}
