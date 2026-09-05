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
import {
  ZAGOLOVOK_PRIMERA,
  ZAGOLOVOK_RAZGOVORA,
  ZAGOLOVOK_SLOVARYA,
  ZAGOLOVOK_TABLICY,
} from "@/lib/content/podpisi-ekranov";
import { ZNACHKI_VIDA } from "@/lib/content/znaki";
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
 * Заголовок экрана со значком слева.
 *
 * ЗАЧЕМ ОН ЗДЕСЬ. Значок рисовался только у случая (`explain`), а у примера,
 * таблицы, врезки и словаря экран открывался голой строкой. Владелец 5 сентября
 * 2026 попросил больше картинок; значок при этом остаётся ЧАСТЬЮ СОДЕРЖАНИЯ —
 * его ставит поле `znak` у блока, то есть тот, кто пишет урок, а не код
 * страницы. Нет значка — заголовок стоит один, ничего не ломается.
 */
function Shapka({
  znak,
  children,
}: {
  znak?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={s.zagolovok}>
      {znak && (
        <span className={s.znakZagolovka} aria-hidden="true">
          <Znak kod={znak} razmer={30} />
        </span>
      )}
      <span>{children}</span>
    </h2>
  );
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

/**
 * Строка объяснения, в которой у названных кусков стоит кнопка «послушать».
 *
 * ЗАЧЕМ. Решение владельца от 4 сентября 2026: ученик не умеет читать
 * транскрипцию, и `/dʒeɪ/` без звука ему ничего не говорит. Кнопка стоит рядом
 * с самой транскрипцией, а не отдельным экраном с таблицей.
 *
 * Куски ищутся с начала строки, при равном начале побеждает длинный: иначе
 * ключ `B` съел бы начало ключа `B b`.
 */
function sZvukom(stroka: string, zvuki: Record<string, string>): React.ReactNode {
  const klyuchi = Object.keys(zvuki);
  if (klyuchi.length === 0) return stroka;

  const kuski: React.ReactNode[] = [];
  let ostatok = stroka;
  let nomer = 0;

  while (ostatok.length > 0) {
    let nashli: { gde: number; klyuch: string } | null = null;
    for (const klyuch of klyuchi) {
      const gde = ostatok.indexOf(klyuch);
      if (gde === -1) continue;
      if (!nashli || gde < nashli.gde || (gde === nashli.gde && klyuch.length > nashli.klyuch.length)) {
        nashli = { gde, klyuch };
      }
    }
    if (!nashli) {
      kuski.push(ostatok);
      break;
    }
    if (nashli.gde > 0) kuski.push(ostatok.slice(0, nashli.gde));
    const chto = zvuki[nashli.klyuch];
    kuski.push(
      <span className={s.zvuchashcheeVTekste} key={(nomer += 1)}>
        {nashli.klyuch}
        <Zvuk src={adresYacheyki(chto)} chto={chto} />
      </span>
    );
    ostatok = ostatok.slice(nashli.gde + nashli.klyuch.length);
  }

  return kuski;
}

export default function Ekran({ block }: { block: MaterialBlock }) {
  switch (block.kind) {
    /* ------------------------------------------------------------------
     * Случай: значок, имя случая, правило и примеры
     * ---------------------------------------------------------------- */
    case "explain": {
      const [imya, ...ostalnoe] = block.text;
      const primery = ostalnoe.map(razobrat);
      const zvuki = zvuchashchee(block);

      return (
        <div className={s.sluchay}>
          {block.znak && (
            <div className={s.risunok}>
              <Znak kod={block.znak} />
            </div>
          )}
          <div className={s.telo}>
            <h2 className={s.zagolovok}>{sZvukom(imya, zvuki)}</h2>
            {ostalnoe.map((stroka, i) =>
              primery[i] ? null : (
                <p className={s.pravilo} key={i}>
                  {sZvukom(stroka, zvuki)}
                </p>
              )
            )}
            <div className={s.stroki}>
              {primery.map((para, i) =>
                para ? (
                  <div className={s.stroka} key={i}>
                    <div className={s.en} lang="en">
                      {/* Кнопка у примера случая. Прежде звук в объяснении стоял
                          только у кусков правила, а примеры — самое читаемое
                          место экрана — молчали: в уроке о чтении сочетаний из
                          восьми случаев звучал один. Правило владельца от 19
                          августа простое: звук стоит там, где ученик читает. */}
                      {zvuki[para.en] && (
                        <Zvuk src={adresYacheyki(zvuki[para.en])} chto={zvuki[para.en]} />
                      )}
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
            <Shapka znak={block.znak}>
              {/* Разговор звучит целиком и на два голоса — решение владельца от
                  19 августа. Кнопка одна, у названия. */}
              <Zvuk
                src={adresRazgovora(block.text)}
                chto={block.caption ?? "разговор"}
                vid="stroka"
              />{" "}
              {block.caption ?? ZAGOLOVOK_RAZGOVORA}
            </Shapka>
            <div className={s.razgovor}>
              {repliki(stroki).map((r, i) => (
                <div className={`${s.puzyr} ${r.svoy ? "" : s.sprava}`} key={i}>
                  <div className={s.lico}>
                    <Znak
                      kod={r.svoy ? ZNACHKI_VIDA.uchenik : ZNACHKI_VIDA.uchitel}
                      razmer={24}
                    />
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
          <Shapka znak={block.znak}>{block.caption ?? ZAGOLOVOK_PRIMERA}</Shapka>
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
          <Shapka znak={block.znak}>{block.caption ?? ZAGOLOVOK_TABLICY}</Shapka>
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
            {/* Значок содержания главнее буквы: у врезки о частой ошибке он
                говорит о предмете, а «i» — только о том, что это врезка. */}
            {block.znak ? <Znak kod={block.znak} razmer={26} /> : oshibka ? "!" : "i"}
          </div>
          <div>
            <div className={s.zag}>{sZvukom(zagolovok, zvuchashchee(block))}</div>
            {ostalnoe.map((p, i) => (
              <p key={i}>{sZvukom(p, zvuchashchee(block))}</p>
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
          <Shapka znak={block.znak}>{block.caption ?? ZAGOLOVOK_SLOVARYA}</Shapka>
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

    /* ------------------------------------------------------------------
     * Картинка во весь экран
     * ---------------------------------------------------------------- */
    case "image":
      return (
        <figure className={s.kartinka}>
          {/* Обычный img по той же причине, что и у значков: у нас лежат svg
              из Twemoji и наши собственные схемы, оптимизировать нечего. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    /* Чтение и запись — прежним видом, см. заметку наверху файла. */
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
