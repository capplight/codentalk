import type { Course, Track } from "@/lib/types";

/**
 * Какие курсы бесплатны, а какие по подписке. Раздел 1.2 техзадания.
 *
 * Правило живёт в одном месте намеренно: им пользуются и скрипт переноса
 * материалов в базу, и витрина. Если продублировать, однажды витрина скажет
 * «бесплатно» там, где база считает иначе, и человек упрётся в отказ уже
 * после регистрации.
 */
export function courseAccess(track: Track, course: Course): "free" | "premium" {
  if (track.slug === "english") return "free";
  if (track.slug === "web" && course.slug.includes("intro")) return "free";
  return "premium";
}

/** Есть ли в направлении хоть один бесплатный курс — для метки на витрине. */
export function trackHasFree(track: Track): boolean {
  return track.levels.some((course) => courseAccess(track, course) === "free");
}
