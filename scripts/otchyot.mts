/**
 * Общая машина отчёта для проверок содержания.
 *
 * Вынесена отдельно, потому что устройство отчёта важнее самих проверок.
 * Скрипт, который кричит на правильное, хуже, чем никакого: его перестают
 * читать, а потом начинают «исправлять» верное. Значит уровень замечания —
 * не украшение, а главное решение, и принимать его надо в одном месте.
 *
 *   ОШИБКА    — неверно наверняка. Ненулевой код возврата.
 *   ВОПРОС    — похоже на беду, но может быть и правильно. Решает человек.
 *   СВЕДЕНИЯ  — таблицы и счёты без всякой оценки.
 *
 * Разобранные случаи молчат: courses/resheno.ts. Запись без внятной причины
 * скрипт не принимает — иначе список решённого за месяц станет свалкой, куда
 * сбрасывают неудобное, и проверка умрёт тихо.
 */
import { resheno } from "../courses/resheno.ts";

export type Uroven = "ОШИБКА" | "ВОПРОС" | "СВЕДЕНИЯ";

export interface Zamechanie {
  uroven: Uroven;
  gde: string;
  chto: string;
  /** Что с этим делать. У ВОПРОСа пишется всегда: иначе он превращается в укор. */
  sovet?: string;
}

const zamechaniya: Zamechanie[] = [];
let zamolchano = 0;

export function skazat(uroven: Uroven, gde: string, chto: string, sovet?: string): void {
  // Сравниваем по вхождению: запись «like» гасит и «слово `like` выше ступени»,
  // и «like: в словнике не нашёл». Сведения не гасим — они ничего не требуют.
  if (uroven !== "СВЕДЕНИЯ" && resheno.some((r) => chto.includes(r.chto))) {
    zamolchano += 1;
    return;
  }
  zamechaniya.push({ uroven, gde, chto, sovet });
}

/** Проверить сам список решённого. Запись без причины — ошибка, и это принципиально. */
export function proveritResheno(): void {
  for (const zapis of resheno) {
    if (zapis.pochemu.trim().length < 30) {
      skazat("ОШИБКА", "courses/resheno.ts",
        `у записи «${zapis.chto}» причина короче тридцати знаков`,
        "без внятной причины список решённого превращается в свалку — напиши, почему это не ошибка");
    }
  }
}

/** Напечатать отчёт и завершить работу. `hvost` — строка о том, чего скрипт не умеет. */
export function otchyot(hvost: string): never {
  const poUrovnyam: Record<Uroven, Zamechanie[]> = { "ОШИБКА": [], "ВОПРОС": [], "СВЕДЕНИЯ": [] };
  for (const z of zamechaniya) poUrovnyam[z.uroven].push(z);

  for (const uroven of ["ОШИБКА", "ВОПРОС", "СВЕДЕНИЯ"] as Uroven[]) {
    const spisok = poUrovnyam[uroven];
    if (!spisok.length) continue;
    console.log(`\n--- ${uroven}: ${spisok.length}`);
    for (const z of spisok) {
      console.log(`\n ${z.gde}\n   ${z.chto}`);
      if (z.sovet) console.log(`   → ${z.sovet}`);
    }
  }

  console.log("");
  if (zamolchano) console.log(`Разобрано раньше и потому пропущено: ${zamolchano} (courses/resheno.ts).`);
  console.log(`Ошибок: ${poUrovnyam["ОШИБКА"].length}, вопросов: ${poUrovnyam["ВОПРОС"].length}.`);
  console.log(hvost);

  process.exit(poUrovnyam["ОШИБКА"].length ? 1 : 0);
}
