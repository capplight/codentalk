/**
 * Склонение существительного при числе: 1 урок, 2 урока, 5 уроков.
 *
 * Живёт в одном месте, потому что нужно на витрине, в кабинете и на страницах
 * курса. Написанное заново в каждом файле, оно рано или поздно расходится —
 * и на соседних страницах появляется «2 уроков».
 */
export function plural(count: number, one: string, few: string, many: string): string {
  const mod100 = Math.abs(count) % 100;
  if (mod100 >= 11 && mod100 <= 14) return many;
  const mod10 = mod100 % 10;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

/** Число вместе со склонённым словом: «2 урока». */
export function withCount(count: number, one: string, few: string, many: string): string {
  return `${count} ${plural(count, one, few, many)}`;
}
