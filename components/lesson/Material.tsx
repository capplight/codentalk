/**
 * Блоки материала. Серверный компонент: разметка уходит в браузер готовой,
 * ничего не пересчитывается на стороне ученика.
 *
 * Серифный шрифт только у объяснения — там, где читают подолгу. Остальное
 * (таблицы, словарь, код) набрано гротеском и моноширинным.
 */
import type { MaterialBlock } from "@/lib/content/types";
import {
  adresBloka,
  adresRazgovora,
  adresSlova,
  adresYacheyki,
  zvuchashchee,
} from "@/lib/content/zvuk";
import Rasshifrovka from "./Rasshifrovka";
import Zvuk from "./Zvuk";
import s from "./lesson.module.css";

/**
 * Разбить текст примера на строки.
 *
 * Пустая строка внутри примера отделяет один список от другого — она остаётся
 * промежутком, а не превращается в пустой абзац.
 */
function lines(text: string, zvuk?: Record<string, string>) {
  return text.split("\n").map((line, i) =>
    line.trim() === "" ? (
      <span key={i} className={s.exampleGap} aria-hidden="true" />
    ) : (
      <span key={i} className={s.exampleLine}>
        {/* Звук стоит у самой строки, а не отдельным блоком под примером:
            ученик слышит ровно то, на что смотрит. Решение владельца от
            19 августа. */}
        {zvuk?.[line.trim()] && (
          <Zvuk src={adresYacheyki(zvuk[line.trim()])} chto={zvuk[line.trim()]} />
        )}
        {line}
      </span>
    )
  );
}

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
          {block.caption && (
            <span className={s.exampleCaption}>
              {/* Разговор звучит целиком и на два голоса: он должен звучать
                  разговором, а не одним длинным предложением. */}
              {block.razgovor && block.text && (
                <Zvuk src={adresRazgovora(block.text)} chto={block.caption} vid="stroka" />
              )}
              {block.caption}
            </span>
          )}
          {block.code && <pre className={s.code}>{block.code}</pre>}
          {/* Перевод строки в примере — это новая реплика разговора или новая
              строка списка. Раньше пример уходил в обычный абзац, и весь
              разговор слипался в одну строку: «— What's your name? — Alim. —
              How do you spell that?». Владелец назвал это скороговоркой, и был
              прав: читать такое нельзя. */}
          {block.text && (
            <div className={s.exampleText}>{lines(block.text, zvuchashchee(block))}</div>
          )}
          <p className={s.exampleExplain}>{block.explain}</p>
        </div>
      );

    case "table": {
      const zvuki = zvuchashchee(block);
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
                  {row.map((cell, j) => {
                    /* Ячейка может звучать: у таблицы алфавита это единственный
                       способ разобрать буквы по одной. Запись целиком остаётся
                       отдельным блоком — она о порядке, а не о букве. */
                    const zvuchit = zvuki[cell];
                    return (
                      <td key={j}>
                        {zvuchit && (
                          <Zvuk src={adresYacheyki(zvuchit)} chto={zvuchit} />
                        )}
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "note":
      return (
        <aside className={`${s.note} ${block.tone === "mistake" ? s.noteMistake : ""}`}>
          {/* Врезка тоже умеет разделяться по строкам: исключение, поставленное
              отдельным абзацем, читается иначе, чем приклеенное к правилу. */}
          {block.text.includes("\n") ? (
            <span className={s.noteLines}>{lines(block.text)}</span>
          ) : (
            block.text
          )}
        </aside>
      );

    case "audio": {
      /* Адрес записи выводится из самого текста, в уроке он не хранится: правка
         фразы означает другой файл, и забыть переозвучить нельзя. Поле `src`
         остаётся ходом назад — им подменяют одну запись живым голосом, не
         трогая остальные. */
      const temp = block.pace === "slow" ? "slow" : "normal";
      const zapis = block.src ?? adresBloka(block.transcript, temp, Boolean(block.voice));

      return (
        <div className={s.audio}>
          {block.caption && <span className={s.exampleCaption}>{block.caption}</span>}

          {block.planned ? (
            /* Заготовка: место под запись размечено, звука ещё нет. Показываем
               текст и говорим прямо — сломанный проигрыватель хуже честной
               строки, а обещать звук и не дать его нельзя. */
            <p className={s.plannedAudio}>
              Запись готовится. Пока прочитай текст вслух сам — вот что должно
              звучать:
            </p>
          ) : (
            <audio controls preload="none" src={zapis} />
          )}

          {/* Расшифровка доступна всегда — без неё запись бесполезна глухим и
              тем, кто без наушников. Прячется она только там, где проверяется
              понимание на слух, и то за кнопку, а не за верный ответ. */}
          {block.skryt ? (
            <Rasshifrovka text={block.transcript} />
          ) : (
            <p className={s.transcript}>{block.transcript}</p>
          )}
        </div>
      );
    }

    case "text":
      return (
        <article className={`${s.tekst} ${s[`tekst_${block.genre}`] ?? ""}`}>
          {block.title && <h3 className={s.tekstTitle}>{block.title}</h3>}
          <div className={s.tekstBody} lang="en">
            {block.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {block.glossary && block.glossary.length > 0 && (
            /* Незнакомое слово даётся здесь же. Текст, где его нет, на первых
               ступенях не читается, а разгадывается — и ученик бросает. */
            <dl className={s.tekstSlovar}>
              {block.glossary.map((item, i) => (
                <div key={i}>
                  <dt lang="en">{item.term}</dt>
                  <dd>{item.translation}</dd>
                </div>
              ))}
            </dl>
          )}
        </article>
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
                {/* Слово без звука ученик запоминает написанием и произносит
                    по-своему. Кнопка, а не проигрыватель: у слова одна секунда,
                    перематывать нечего. */}
                <Zvuk src={adresSlova(item.term)} chto={item.term} />
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
