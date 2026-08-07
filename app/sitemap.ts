import type { MetadataRoute } from "next";
import { tracks, courses } from "@/content";
import { chaptersOf } from "@/lib/types";

const BASE = "https://codentalk.kz";

/** Карта сайта для поисковиков: главная, направления, уровни и все их разделы/главы. */
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [{ url: BASE, priority: 1 }];

  for (const track of tracks) {
    if (track.comingSoon) continue;
    urls.push({ url: `${BASE}/track/${track.slug}`, priority: 0.9 });
    if (track.placement) {
      urls.push({ url: `${BASE}/track/${track.slug}/placement`, priority: 0.7 });
    }
  }

  for (const course of courses) {
    if (course.comingSoon) continue;
    urls.push({ url: `${BASE}/course/${course.slug}`, priority: 0.8 });
    urls.push({ url: `${BASE}/course/${course.slug}/quests`, priority: 0.6 });
    urls.push({ url: `${BASE}/course/${course.slug}/texts`, priority: 0.6 });
    urls.push({ url: `${BASE}/course/${course.slug}/exercises`, priority: 0.6 });
    if (course.rules) urls.push({ url: `${BASE}/course/${course.slug}/rules`, priority: 0.7 });
    for (const section of ["quest", "text", "exercise"] as const) {
      for (const chapter of chaptersOf(course, section)) {
        urls.push({ url: `${BASE}/course/${course.slug}/${chapter.slug}`, priority: 0.5 });
      }
    }
  }

  return urls;
}
