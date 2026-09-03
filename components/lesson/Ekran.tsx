/**
 * Один экран пошагового урока.
 *
 * Серверный компонент: разметка уходит в браузер готовой, на стороне ученика
 * работают только кнопки звука и задания.
 *
 * ЧЕМ ОТЛИЧАЕТСЯ ОТ `Material`. Тот показывает блок в потоке страницы — так
 * устроены нынешние курсы. Здесь блок занимает экран целиком и подаётся как
 * отдельная мысль: у случая свой значок, своё имя и свои два примера. Оба вида
 * живут рядом, потому что переделка идёт курс за курсом.
 *
 * ЧЕГО ЗДЕСЬ НЕТ НАРОЧНО: чтения (`text`) и записи (`audio`). Уроки умений в
 * новом формате ещё не написаны, и выдумывать им подачу до того, как они
 * появятся, — значит писать код под несуществующее содержание. Пока такие
 * блоки показываются прежним `Material`: это честнее пустого экрана.
 */
import type { MaterialBlock } from "@/lib/content/types";
import { adresRazgovora, adresSlova, adresYacheyki, zvuchashchee } from "@/lib/content/zvuk";
import Material from "./Material";
import Zvuk from "./Zvuk";
import s from "./shagi.module.css";

/** Значок Twemoji. Файлы лежат у нас — забирает `npm run znachki`. */
export function Znak({ kod, razmer = 58 }: { kod: string; razmer?: number }) {
  // Обычный img, а не next/image: значки уже готового размера, оптимизировать
  // нечего, а next/image потребовал бы своей обработки на каждый.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/twemoji/${kod}.svg`} alt="" width={razmer} height={razmer} />;
}

/**
 * Строка объяснения — это пример, если в ней есть и английское, и русское, и
 * они разделены тире.
 *
 * На этом держится правило «у случая два примера с переводом»: автор пишет
 * `I am Alim. — Я Алим.`, а показывается это карточкой, где английское сверху
 * и крупно, а перевод под ним и тише. Разбирать строку разметкой автору не
 * приходится.
 */
export function razobrat(stroka: string): { en: string; ru: string } | null {
  const m = stroka.match(/^(.+?)\s+—\s+(.+)$/);
  if (!m) return null;
  if (!/[A-Za-z]{2,}/.test(m[1])) return null;
  if (!/[А-Яа-яЁё]{2,}/.test(m[2])) return null;
  return { en: m[1].trim(), ru: m[2].trim() };
}

export default function Ekran({ block }: { block: MaterialBlock }) {
  switch (block.kind) {
    /* ------------------------------------------------------------------
     * Случай: значок, имя случая, правило и примеры
     * ---------------------------------------------------------------- */
    case "explain": {
      const [imya, ...ostalnoe] = block.text;
      const primery = ostalnoe.map(razobrat);

      return (
        <div className={s.sluchay}>
          {block.znak && (
            <div className={s.risunok}>
              <Znak kod={block.znak} />
            </div>
          )}
          <div className={s.telo}>
            <h2 className={s.zagolovok}>{imya}</h2>
            {ostalnoe.map((stroka, i) =>
              primery[i] ? null : (
                <p className={s.pravilo} key={i}>
                  {stroka}
                </p>
              )
            )}
            <div className={s.stroki}>
              {primery.map((para, i) =>
                para ? (
                  <div className={s.stroka} key={i}>
                    <div className={s.en} lang="en">
                      {para.en}
                    </div>
                    <div className={s.ru}>{para.ru}</div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      );
    }

    /* ------------------------------------------------------------------
     * Пример. Разговор показывается репликами, остальное — строками
     * ---------------------------------------------------------------- */
    case "example": {
      const stroki = (block.text ?? "").split("\n").filter((st) => st.trim() !== "");
      const zvuki = zvuchashchee(block);

      if (block.razgovor && block.text) {
        return (
          <>
            <h2 className={s.zagolovok}>
              {/* Разговор звучит целиком и на два голоса — решение владельца от
                  19 августа. Кнопка одна, у названия. */}
              <Zvuk
                src={adresRazgovora(block.text)}
                chto={block.caption ?? "разговор"}
                vid="stroka"
              />{" "}
              {block.caption ?? "Разговор"}
            </h2>
            <div className={s.razgovor}>
              {repliki(stroki).map((r, i) => (
                <div className={`${s.puzyr} ${r.svoy ? "" : s.sprava}`} key={i}>
                  <div className={s.lico}>
                    <Znak kod={r.svoy ? "1f9d1-200d-1f393" : "1f9d1-200d-1f3eb"} razmer={24} />
                  </div>
                  <div className={s.rech}>
                    <div className={s.en} lang="en">
                      {r.en}
                    </div>
                    {block.perevod?.[r.klyuch] && (
                      <div className={s.ru}>{block.perevod[r.klyuch]}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {block.explain && <p className={s.vyvod}>{block.explain}</p>}
          </>
        );
      }

      return (
        <>
          <h2 className={s.zagolovok}>{block.caption ?? "Пример"}</h2>
          <div className={s.stroki}>
            {stroki.map((st, i) => (
              <div className={s.stroka} key={i}>
                <div className={s.en} lang="en">
                  {zvuki[st.trim()] && (
                    <Zvuk src={adresYacheyki(zvuki[st.trim()])} chto={zvuki[st.trim()]} />
                  )}
                  {st}
                </div>
                {block.perevod?.[st.trim()] && (
                  <div className={s.ru}>{block.perevod[st.trim()]}</div>
                )}
              </div>
            ))}
          </div>
          {block.explain && <p className={s.vyvod}>{block.explain}</p>}
        </>
      );
    }

    /* ------------------------------------------------------------------
     * Таблица
     * ---------------------------------------------------------------- */
    case "table": {
      const zvuki = zvuchashchee(block);
      return (
        <>
          <h2 className={s.zagolovok}>{block.caption ?? "Свод"}</h2>
          <div className={s.tablicaKarta}>
            <table className={s.tablica}>
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th key={i} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        {zvuki[cell] && <Zvuk src={adresYacheyki(zvuki[cell])} chto={zvuki[cell]} />}
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }

    /* ------------------------------------------------------------------
     * Врезка: частая ошибка или сведение
     * ---------------------------------------------------------------- */
    case "note": {
      const oshibka = block.tone === "mistake";
      const [zagolovok, ...ostalnoe] = block.text.split("\n\n");
      return (
        <div className={`${s.vrezka} ${oshibka ? s.vrezkaOshibka : ""}`}>
          <div className={s.vrezkaZnak} aria-hidden="true">
            {oshibka ? "!" : "i"}
          </div>
          <div>
            <div className={s.zag}>{zagolovok}</div>
            {ostalnoe.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      );
    }

    /* ------------------------------------------------------------------
     * Слова урока
     * ---------------------------------------------------------------- */
    case "vocab":
      return (
        <>
          <h2 className={s.zagolovok}>{block.caption ?? "Слова урока"}</h2>
          <div className={s.nabor}>
            {block.items.map((item, i) => (
              <div className={s.slovoKarta} key={i}>
                {item.znak ? (
                  <Znak kod={item.znak} razmer={40} />
                ) : (
                  <div className={s.bezZnaka} />
                )}
                <div className={s.en} lang="en">
                  <Zvuk src={adresSlova(item.term)} chto={item.term} />
                  {item.term}
                </div>
                <div className={s.ru}>{item.translation}</div>
                {item.hint && <div className={s.chtenie}>{item.hint}</div>}
              </div>
            ))}
          </div>
        </>
      );

    /* Чтение, запись и картинка — прежним видом, см. заметку наверху файла. */
    default:
      return <Material block={block} />;
  }
}

/**
 * Реплики разговора: кто говорит, что говорит и по какому ключу искать перевод.
 *
 * Ключ — строка КАК ОНА ЗАПИСАНА, вместе с тире в начале: по ней автор
 * подписывает перевод. Показываем при этом без тире — его заменяет сам пузырь.
 */
function repliki(
  stroki: string[]
): Array<{ svoy: boolean; en: string; klyuch: string }> {
  return stroki.map((st, i) => ({
    svoy: i % 2 === 0,
    klyuch: st.trim(),
    en: st.replace(/^—\s*/, "").trim(),
  }));
}
