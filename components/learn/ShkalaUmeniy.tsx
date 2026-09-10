import type { Module } from "@/lib/content/types";
import { SLOVA } from "./slova";
import t from "@/app/learn/tropa.module.css";
import u from "./shkala.module.css";

/**
 * ШКАЛА УМЕНИЙ — то, что раньше было списком «Чему научишься в модуле».
 *
 * Решение владельца от 10 сентября 2026: показывать итоги галочками, а не
 * стеной текста. Повод — его же снимок экрана: девять строк стояли перед
 * картой и отжимали первый урок за нижний край.
 *
 * ПОЧЕМУ ЭТО ВООБЩЕ ВОЗМОЖНО. `outcomes` модуля совпадают ДОСЛОВНО и один к
 * одному с полем `outcome` каждого урока — так устроено нарочно, и
 * `check:content` следит за совпадением точным сравнением строк, иначе итог
 * урока осиротеет и его не спросит работа. Значит каждая строка списка знает
 * свой урок, а урок знает, пройден ли он.
 *
 * Отсюда три состояния одного блока: цели, счёт умений, итог. Строки при этом
 * одни и те же — редактор написал их один раз.
 *
 * ОСТОРОЖНО, ЕСЛИ БУДЕШЬ ПРАВИТЬ. Связь держится на дословном совпадении
 * строки. Поправил итог урока и не поправил `outcomes` модуля — строка молча
 * перестанет закрашиваться, и никакая проверка об этом не скажет: она следит за
 * тем, что итог спрашивается работой, а не за тем, что он нашёл свой урок.
 * Правило проекта на этот счёт есть: строка, по которой сверяются точным
 * совпадением, правится поиском по всему курсу.
 */
export default function ShkalaUmeniy({
  module,
  done,
}: {
  module: Module;
  done: ReadonlySet<string>;
}) {
  // Итог → пройден ли урок с таким итогом. Соответствие дословное.
  const urokPoItogu = new Map(module.lessons.map((lesson) => [lesson.outcome, lesson.slug]));

  const stroki = module.outcomes.map((outcome) => {
    const slug = urokPoItogu.get(outcome);
    return { outcome, gotovo: slug !== undefined && done.has(slug) };
  });

  const gotovo = stroki.filter((s) => s.gotovo).length;
  const vsego = stroki.length;
  const nachat = gotovo > 0;
  const zakonchen = vsego > 0 && gotovo === vsego;

  const imya = zakonchen
    ? SLOVA.umeniyaZakonchen
    : nachat
      ? SLOVA.umeniyaIdyot
      : SLOVA.umeniyaNeNachat;

  return (
    <div className={`${t.vyvody} ${u.shkala}`}>
      {/* Счёта здесь нет нарочно. Он был и повторял число из шапки модуля:
          «4 из 9» и «4 из 9 уроков» на одном экране мерят одно и то же, потому
          что итог модуля есть у каждого урока ровно один. Нашёл редактор
          прогоном по всем четырнадцати модулям курса. */}
      <span className={t.vyvodyImya}>{imya}</span>

      <ul className={u.spisok}>
        {stroki.map((stroka, i) => (
          <li key={i} className={stroka.gotovo ? u.gotovo : u.zhdyot}>
            {/* Значок рисуется разметкой, а не картинкой: он меняется вместе с
                темой и не тянет ни одного лишнего запроса. */}
            <span className={u.znak} aria-hidden>
              {stroka.gotovo ? "✓" : ""}
            </span>
            <span>{stroka.outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
