/**
 * Переходник между содержанием курса и правилом доступа.
 *
 * Правило живёт в `lib/domain/dostup-moduley.ts` и по правилу слоёв не знает
 * ни про базу, ни про React, ни про наши типы содержания. Значит кто-то должен
 * перевести курс в то, что правило понимает, — этим и занят этот файл, и
 * больше ничем.
 *
 * Одна точка на страницы, методы интерфейса и проверки: иначе правил станет
 * два, и разойдутся они молча.
 */

import type { Course } from "./types";
import type { ModulDlyaDostupa } from "@/lib/domain/dostup-moduley";

export function moduliKursa(course: Course): ModulDlyaDostupa[] {
  return course.modules.map((module) => ({
    slug: module.slug,
    uroki: module.lessons.map((lesson) => lesson.slug),
  }));
}
