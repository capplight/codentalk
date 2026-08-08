/**
 * Блоки материала. Серверный компонент: разметка уходит в браузер готовой,
 * ничего не пересчитывается на стороне ученика.
 *
 * Серифный шрифт только у объяснения — там, где читают подолгу. Остальное
 * (таблицы, словарь, код) набрано гротеском и моноширинным.
 */
import type { MaterialBlock } from "@/lib/content/types";
import s from "./lesson.module.css";

export default function Material({ block }: { block: MaterialBlock }) {
  switch (block.kind) {
    case "explain":
      return (
        <div className={s.text}>
          {block.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      );

    case "example":
      return (
        <div className={s.example}>
          {block.caption && <span className={s.exampleCaption}>{block.caption}</span>}
          {block.code && <pre className={s.code}>{block.code}</pre>}
          {block.text && <p className={s.text}>{block.text}</p>}
          <p className={s.exampleExplain}>{block.explain}</p>
        </div>
      );

    case "table":
      return (
        <div className={s.tableWrap}>
          <table className={s.table}>
            {block.caption && <caption>{block.caption}</caption>}
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
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return (
        <aside className={`${s.note} ${block.tone === "mistake" ? s.noteMistake : ""}`}>
          {block.text}
        </aside>
      );

    case "audio":
      return (
        <div className={s.audio}>
          {block.caption && <span className={s.exampleCaption}>{block.caption}</span>}
          <audio controls src={block.src} />
          {/* Расшифровка не спрятана: без неё запись бесполезна глухим и тем, кто без наушников */}
          <p className={s.transcript}>{block.transcript}</p>
        </div>
      );

    case "image":
      return (
        <figure className={s.figure}>
          {/* Обычный img, а не next/image: изображения уроков лежат рядом с материалом
              и заранее подогнаны по размеру — оптимизировать нечего. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption className={s.figcaption}>{block.caption}</figcaption>}
        </figure>
      );

    case "vocab":
      return (
        <div className={s.vocab}>
          <div className={s.vocabHead}>{block.caption ?? "Слова темы"}</div>
          {block.items.map((item, i) => (
            <div className={s.vocabItem} key={i}>
              <span className={s.vocabTerm}>
                {item.term}
                {item.hint && <span className={s.vocabHint}> · {item.hint}</span>}
              </span>
              <span>{item.translation}</span>
              <span className={s.vocabExample}>{item.example}</span>
            </div>
          ))}
        </div>
      );
  }
}
