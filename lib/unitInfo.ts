import type { Unit } from "@/lib/types";
import starterUnits from "@/content/english-starter/units";
import a1Units from "@/content/english-a1/units";
import a2Units from "@/content/english-a2/units";
import b1Units from "@/content/english-b1/units";
import b2Units from "@/content/english-b2/units";

/**
 * Лёгкий доступ к юнитам по слагу уровня — только units.ts, БЕЗ импорта глав
 * (content/index.ts тянет весь сюжетный контент всех уровней, что раздувает
 * клиентский бандл там, где нужен только заголовок юнита, например в
 * PlacementTest на результате теста).
 */
const UNITS_BY_COURSE: Record<string, Unit[]> = {
  "english-starter": starterUnits,
  "english-a1": a1Units,
  "english-a2": a2Units,
  "english-b1": b1Units,
  "english-b2": b2Units,
};

export function getUnitInfo(courseSlug: string, unitSlug: string) {
  const units = UNITS_BY_COURSE[courseSlug] ?? [];
  const index = units.findIndex((u) => u.slug === unitSlug);
  if (index === -1) return undefined;
  return { unit: units[index], number: index + 1, total: units.length };
}
