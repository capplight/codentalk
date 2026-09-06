"use client";

/**
 * Задание урока. Девять видов, один вид поведения:
 * попытки не ограничены, подсказка по запросу, после верного ответа — разбор.
 *
 * Почему ответы приходят в браузер. Это УПРАЖНЕНИЕ, а не проверочная работа:
 * оно учит, на оценку не влияет, отвечать надо мгновенно и без сети. Ответы
 * проверочных работ на сторону ученика не уходят никогда — там проверка на
 * сервере (правило в CLAUDE.md).
 */

import { useState } from "react";
import { checkAnswer, missingParts, type Answer } from "@/lib/content/check";
import {
  bukvyYacheek,
  mestaSlova,
  mozhnoDobavit,
  OBRAZEC_SETKI,
  shirina,
  yacheykiSlova,
} from "@/lib/content/setka";
import type { TaskBlock } from "@/lib/content/types";
import { adresObrazca, adresVoprosa, raskladkaGolosov } from "@/lib/content/zvuk";
import { useLessonFlow } from "./LessonFlow";
import Zvuk from "./Zvuk";
import s from "./lesson.module.css";

/*
 * ПОДПИСИ СЕТКИ БУКВ. Их пишет РЕДАКТОР — это видимый ученику текст, а автор
 * кода видимого текста не пишет (решение владельца от 5 сентября 2026).
 *
 * Стоят они здесь, а не в уроке, потому что говорят о том, КАК НАЖИМАТЬ, и
 * одинаковы во всех четырёх сетках курса. Урок, который завёл бы свою подпись,
 * показал бы ученику вторую правду о том же.
 */
const SETKA_OBRAZEC_PODPIS = "Слева слово отмечено по строке, а справа по столбцу.";
const SETKA_KAK_NACHAT = "Нажимай буквы слова по порядку, от первой до последней.";
const SETKA_KAK_DALSHE =
  "Нажимай следующие буквы этого слова. Слово будет найдено на последней букве.";

type Status = "idle" | "right" | "wrong" | "shown";

export default function TaskCard({
  task,
  index,
  total,
}: {
  task: TaskBlock;
  index: number;
  total: number;
}) {
  const { markAnswered } = useLessonFlow();
  const [status, setStatus] = useState<Status>("idle");
  const [hintOpen, setHintOpen] = useState(false);

  // Ответ хранится в форме, удобной виду задания
  const [picked, setPicked] = useState<number[]>([]);
  const [text, setText] = useState("");
  /*
   * СБОРКА: что ученик уже ПОСТАВИЛ, по порядку. Пусто — значит не начинал.
   *
   * Прежде здесь лежала перестановка всех кусков сразу, а двигали их стрелками
   * «выше» и «ниже». Собрать так слово из пяти букв — девять нажатий вместо
   * пяти, и ученик занят не языком, а перекладыванием. Владелец 5 сентября
   * 2026 попросил живых мест; это первое, где живость и польза сходятся.
   */
  const [order, setOrder] = useState<number[]>([]);
  const [pairs, setPairs] = useState<number[]>(() =>
    task.kind === "match" ? task.left.map(() => -1) : []
  );
  /*
   * СЕТКА БУКВ: какие ячейки ученик отметил, собирая слово. По порядку нажатий.
   *
   * ОТМЕЧАЮТСЯ ВСЕ БУКВЫ — решение владельца от 6 сентября 2026: «пусть ученик
   * выбирает не первую и вторую букву, пусть выбирает все буквы в слове и при
   * нажатии последней буквы ответ будет засчитан, так лучше запомнится».
   *
   * До этого дня здесь стояло одно число — начало выделения, — и слово
   * отмечалось двумя нажатиями. Довод тогдашней записи («протянуть пальцем по
   * мелким ячейкам трудно») никуда не делся, но нажатие по каждой букве — не
   * протягивание: промах ничего не стоит, выделение просто начинается заново.
   *
   * Найденные слова лежат в `picked`, как и у `hottext`: там тоже набор, а не
   * перестановка.
   */
  const [otmecheny, setOtmecheny] = useState<number[]>([]);

  const locked = status === "right" || status === "shown";

  function judge(answer: Answer): void {
    // Задание считается отвеченным при любом исходе, включая ошибку: отметка
    // «урок пройден» требует работы, а не правильности.
    markAnswered(task.id);

    const verdict = checkAnswer(task, answer);
    if (verdict === null) {
      setStatus("shown");
      return;
    }
    setStatus(verdict ? "right" : "wrong");
    // Ошибка сама раскрывает подсказку: искать кнопку в этот момент — лишняя работа
    if (!verdict && task.hint) setHintOpen(true);
  }

  function pick(i: number): void {
    if (locked) return;
    if (task.kind === "choice" && task.multiple) {
      const next = picked.includes(i) ? picked.filter((n) => n !== i) : [...picked, i];
      setPicked(next);
      setStatus("idle");
      return;
    }
    setPicked([i]);
    judge([i]);
  }

  function togglePart(i: number): void {
    if (locked) return;
    setPicked(picked.includes(i) ? picked.filter((n) => n !== i) : [...picked, i]);
    setStatus("idle");
  }

  /** Поставить кусок в строку ответа. */
  function postavit(i: number): void {
    if (locked || order.includes(i)) return;
    setOrder([...order, i]);
    setStatus("idle");
  }

  /** Снять поставленный кусок обратно в набор. Ошибку исправляют, а не начинают заново. */
  function snyat(pozicia: number): void {
    if (locked) return;
    setOrder(order.filter((_, n) => n !== pozicia));
    setStatus("idle");
  }

  /**
   * Нажатие по ячейке сетки. Ученик отмечает буквы слова подряд, и слово
   * засчитывается на последней из них.
   *
   * ОШИБКА НЕ НАКАЗЫВАЕТСЯ НИЧЕМ, и это здесь не украшение, а устройство. Три
   * случая, и ни один не сбрасывает работу целиком:
   *
   *   - ячейка не продолжает выделение (стоит наискось, через клетку, назад) —
   *     она становится НАЧАЛОМ нового слова, если с этой буквы вообще начинается
   *     что-то из ненайденного;
   *   - собранные буквы перестали быть началом какого-либо искомого слова — то
   *     же самое: пробуем начать с неё заново;
   *   - буквы сложились в искомое слово — оно найдено, выделение снимается.
   *
   * Найденное слово убрать нельзя: найденное уже найдено.
   */
  function nazhatYacheyku(yacheyka: number): void {
    if (locked || task.kind !== "setka") return;

    const ostalos = task.slova
      .map((slovo, i) => ({ slovo: slovo.slovo.toUpperCase(), i }))
      .filter(({ i }) => !picked.includes(i));

    /** Начать новое слово с этой ячейки — если с такой буквы что-то начинается. */
    const nachatZanovo = (): void => {
      const bukva = bukvyYacheek(task.stroki, [yacheyka]);
      setOtmecheny(ostalos.some(({ slovo }) => slovo.startsWith(bukva)) ? [yacheyka] : []);
    };

    if (!mozhnoDobavit(task.stroki, otmecheny, yacheyka)) {
      nachatZanovo();
      return;
    }

    const sobrano = [...otmecheny, yacheyka];
    const bukvy = bukvyYacheek(task.stroki, sobrano);

    const nomer = ostalos.find(({ slovo }) => slovo === bukvy)?.i;
    if (nomer !== undefined) {
      setOtmecheny([]);
      const naydeno = [...picked, nomer];
      setPicked(naydeno);
      // Последнее слово закрывает задание само: нажимать «Проверить» после
      // того, как искать больше нечего, — лишняя работа.
      if (naydeno.length === task.slova.length) judge(naydeno);
      else setStatus("idle");
      return;
    }

    if (ostalos.some(({ slovo }) => slovo.startsWith(bukvy))) setOtmecheny(sobrano);
    else nachatZanovo();
  }

  return (
    <section className={s.task} aria-label={`Задание ${index} из ${total}`}>
      <span className={s.taskLabel}>
        Задание {index} из {total}
      </span>
      <p className={s.prompt}>{task.prompt}</p>

      {/*
        Картинка при задании. Решение владельца от 5 сентября 2026: «да, картинки
        нужны». Поле `znak` у заданий было с самого начала — его допускает тип
        блока, — а рисовать его было некому: карточка задания поля не читала
        вовсе, и обещание замысла «появится картинка» держалось ни на чём.

        Образец — руководство Cambridge, Pre A1 Starters, с. 22: слово даётся
        россыпью букв И картинкой предмета. Без картинки анаграмма превращается
        в угадывание слова по подсказке.
      */}
      {task.znak && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={s.kartinkaZadaniya}
          src={`/twemoji/${task.znak}.svg`}
          alt=""
          width={72}
          height={72}
        />
      )}

      {/* Запись, по которой спрашивают. Расшифровки тут нет и быть не может:
          она была бы ответом. Слушать можно сколько угодно раз. */}
      {task.zvuk && (
        <div className={s.obrazec}>
          <Zvuk
            src={adresVoprosa(task.zvuk, raskladkaGolosov(task))}
            chto="запись к заданию"
            vid="stroka"
          />
        </div>
      )}

      {/* ------------------------------------------------ выбор варианта */}
      {task.kind === "choice" && (
        <>
          <div className={s.options} role="group">
            {task.options.map((option, i) => (
              <button
                key={i}
                type="button"
                className={[
                  s.option,
                  picked.includes(i) && !locked ? s.optionPicked : "",
                  locked && option.correct ? s.optionRight : "",
                  status === "wrong" && picked.includes(i) && !option.correct ? s.optionWrong : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => pick(i)}
                disabled={locked}
                aria-pressed={picked.includes(i)}
              >
                {option.znak && (
                  // Картинка не заменяет слово, а стоит над ним: ученик выбирает
                  // вещь, но читает и её название — иначе задание перестаёт быть
                  // языковым.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className={s.znakVarianta}
                    src={`/twemoji/${option.znak}.svg`}
                    alt=""
                    width={44}
                    height={44}
                  />
                )}
                {option.text}
              </button>
            ))}
          </div>
          {task.multiple && !locked && (
            <button type="button" className={s.option} onClick={() => judge(picked)}>
              Проверить
            </button>
          )}
        </>
      )}

      {/* ------------------------------------------------ вставить пропущенное */}
      {task.kind === "gap" && (
        <form
          className={s.gapLine}
          onSubmit={(e) => {
            e.preventDefault();
            judge(text);
          }}
        >
          <span>{task.before}</span>
          <input
            className={s.input}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setStatus("idle");
            }}
            disabled={locked}
            aria-label="Пропущенное"
            autoComplete="off"
            spellCheck={false}
          />
          <span>{task.after}</span>
        </form>
      )}

      {/* ------------------------------------------------ отметить в тексте */}
      {task.kind === "hottext" && (
        <div className={s.hottext}>
          {task.parts.map((part, i) =>
            part.selectable ? (
              <button
                key={i}
                type="button"
                className={[
                  s.part,
                  picked.includes(i) && !locked ? s.partPicked : "",
                  locked && part.correct ? s.partRight : "",
                  status === "wrong" && picked.includes(i) && !part.correct ? s.partWrong : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => togglePart(i)}
                disabled={locked}
                aria-pressed={picked.includes(i)}
              >
                {part.text}
              </button>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </div>
      )}

      {/* ------------------------------------------------ расставить по порядку */}
      {/*
        БУКВЫ ВРАЗБРОС — тот же вид задания, что и сборка фразы, но другой на
        вид. Просьба владельца от 5 сентября 2026: «давать слова с буквами в
        разброс и чтобы ученик правильно написал это слово». Кусок из одной
        буквы получает квадратную плитку: россыпь букв должна выглядеть
        россыпью, а не обрубками слов. Отдельного вида задания это не требует —
        различие чисто внешнее, и правила у него те же.
      */}
      {task.kind === "order" && (
        <div
          className={
            task.items.every((k) => k.length === 1) ? `${s.sborka} ${s.sborkaBukvy}` : s.sborka
          }
        >
          {/* Строка ответа: сюда кусок встаёт нажатием, отсюда снимается тем же
              нажатием. Пока пусто, на её месте стоит подсказка — иначе первый
              экран задания выглядит поломанным. */}
          <div className={s.sborkaStroka} aria-label="Твой ответ">
            {order.length === 0 && (
              <span className={s.sborkaPusto}>Нажимай на части внизу — они встанут сюда</span>
            )}
            {order.map((itemIndex, position) => (
              <button
                type="button"
                key={itemIndex}
                className={s.kusokPostavlen}
                onClick={() => snyat(position)}
                disabled={locked}
                lang="en"
                aria-label={`Убрать ${task.items[itemIndex]} с места ${position + 1}`}
              >
                {task.items[itemIndex]}
              </button>
            ))}
          </div>
          <div className={s.sborkaNabor}>
            {task.items.map((kusok, i) =>
              order.includes(i) ? (
                // Место занятого куска не схлопывается: строка не прыгает под
                // пальцем, и видно, сколько кусков осталось.
                <span className={s.kusokPusto} key={i} aria-hidden="true">
                  {kusok}
                </span>
              ) : (
                <button
                  type="button"
                  key={i}
                  className={s.kusok}
                  onClick={() => postavit(i)}
                  disabled={locked}
                  lang="en"
                  aria-label={`Поставить ${kusok}`}
                >
                  {kusok}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------ найти слова в сетке */}
      {task.kind === "setka" &&
        (() => {
          // Ячейки найденных слов считаются заново на каждой отрисовке: держать
          // их отдельным состоянием значит завести вторую правду о том же.
          const nayden = new Set<number>();
          for (const nomer of picked) {
            const mesta = mestaSlova(task.stroki, task.slova[nomer].slovo);
            if (mesta[0]) for (const y of yacheykiSlova(task.stroki, mesta[0])) nayden.add(y);
          }
          const w = shirina(task.stroki);

          return (
            <div className={s.setka}>
              {/*
                ОБРАЗЕЦ НАД ПОЛЕМ — решение владельца от 6 сентября 2026: «еще
                надо чтобы сверху был пример правильного ответа и горизонтально
                и вертикально». Две маленькие сетки: в одной отмечено слово по
                строке, в другой — по столбцу.

                Он один на весь курс и лежит данными в `lib/content/setka.ts`:
                образец говорит о том, КАК НАЖИМАТЬ, а не о предмете урока.
              */}
              <div className={s.setkaObrazec} aria-hidden>
                {[OBRAZEC_SETKI.poStroke, OBRAZEC_SETKI.poStolbcu].map((otmechennye, n) => (
                  <div
                    className={s.setkaObrazecPole}
                    key={n}
                    style={{
                      gridTemplateColumns: `repeat(${shirina(OBRAZEC_SETKI.stroki)}, 1fr)`,
                    }}
                  >
                    {OBRAZEC_SETKI.stroki.map((stroka, r) =>
                      [...stroka].map((bukva, c) => (
                        <span
                          key={`${r}-${c}`}
                          className={[
                            s.setkaObrazecYacheyka,
                            otmechennye.includes(r * shirina(OBRAZEC_SETKI.stroki) + c)
                              ? s.setkaObrazecOtmechena
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {bukva}
                        </span>
                      ))
                    )}
                  </div>
                ))}
              </div>
              <p className={s.setkaObrazecPodpis}>{SETKA_OBRAZEC_PODPIS}</p>

              <div
                className={s.setkaPole}
                style={{ gridTemplateColumns: `repeat(${w}, 1fr)` }}
                role="grid"
                aria-label="Сетка букв"
              >
                {task.stroki.map((stroka, r) =>
                  [...stroka].map((bukva, c) => {
                    const yacheyka = r * w + c;
                    const est = nayden.has(yacheyka);
                    return (
                      <button
                        type="button"
                        key={yacheyka}
                        className={[
                          s.yacheyka,
                          est ? s.yacheykaNaydena : "",
                          otmecheny.includes(yacheyka) ? s.yacheykaNachalo : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => nazhatYacheyku(yacheyka)}
                        disabled={locked}
                        lang="en"
                        aria-label={`Буква ${bukva}, строка ${r + 1}, столбец ${c + 1}`}
                      >
                        {bukva}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Что ищем. Найденное слово встаёт сюда латиницей: ученик видит,
                  что именно он нашёл, а не одну галочку. */}
              <ul className={s.setkaSpisok}>
                {task.slova.map((slovo, i) => {
                  const est = picked.includes(i);
                  return (
                    <li
                      className={est ? s.setkaSlovoNaydeno : s.setkaSlovo}
                      key={slovo.slovo}
                    >
                      {slovo.znak && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className={s.setkaZnak}
                          src={`/twemoji/${slovo.znak}.svg`}
                          alt=""
                          width={28}
                          height={28}
                        />
                      )}
                      <span lang={est ? "en" : undefined}>
                        {est ? slovo.slovo : (slovo.podpis ?? slovo.slovo)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className={s.setkaKak}>
                {otmecheny.length === 0 ? SETKA_KAK_NACHAT : SETKA_KAK_DALSHE}
              </p>
            </div>
          );
        })()}

      {/* ------------------------------------------------ сопоставить пары */}
      {task.kind === "match" && (
        <div>
          {task.left.map((left, i) => (
            <div className={s.matchRow} key={i}>
              <span className={s.matchLeft}>{left}</span>
              <select
                className={s.select}
                value={pairs[i]}
                disabled={locked}
                aria-label={`Пара для «${left}»`}
                onChange={(e) => {
                  const next = [...pairs];
                  next[i] = Number(e.target.value);
                  setPairs(next);
                  setStatus("idle");
                }}
              >
                <option value={-1}>— выбери —</option>
                {task.right.map((right, j) => (
                  <option key={j} value={j}>
                    {right}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* ------------------------------------------------ короткий ответ */}
      {task.kind === "short" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            judge(text);
          }}
        >
          <input
            className={s.field}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setStatus("idle");
            }}
            disabled={locked}
            aria-label="Твой ответ"
            autoComplete="off"
          />
        </form>
      )}

      {/* ------------------------------------------------ развёрнутый ответ */}
      {task.kind === "essay" && (
        <textarea
          className={`${s.field} ${s.area}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          aria-label="Твой ответ"
          placeholder={task.minWords ? `Примерно от ${task.minWords} слов` : undefined}
        />
      )}

      {/* ------------------------------------------------ написать код */}
      {task.kind === "code" && (
        <textarea
          className={`${s.field} ${s.area} ${s.codeArea}`}
          value={text || task.starter}
          onChange={(e) => {
            setText(e.target.value);
            setStatus("idle");
          }}
          disabled={locked}
          aria-label="Твой код"
          spellCheck={false}
        />
      )}

      {/* ------------------------------------------------ произнести вслух */}
      {task.kind === "speak" && (
        <div className={s.hottext}>
          <span lang="en">{task.phrase}</span>
          {task.translation && <div className={s.transcript}>{task.translation}</div>}
          {/* Образец обязателен: без него ученику предлагают произнести то,
              чего он ни разу не слышал, и он произносит по написанию. */}
          <div className={s.obrazec}>
            <Zvuk src={adresObrazca(task.phrase)} chto={task.phrase} vid="stroka" />
          </div>
        </div>
      )}

      {/* ------------------------------------------------ кнопки */}
      {!locked && (
        <div className={s.actions}>
          {task.kind !== "choice" && (
            <button
              type="button"
              className={s.option}
              // У сборки кнопка ждёт, пока поставлены все куски: неполный ответ
              // засчитался бы ошибкой, хотя ученик просто не закончил.
              disabled={task.kind === "order" && order.length !== task.items.length}
              onClick={() => {
                if (task.kind === "order") judge(order);
                else if (task.kind === "setka") judge(picked);
                else if (task.kind === "match") judge(pairs);
                else if (task.kind === "hottext") judge(picked);
                else judge(text);
              }}
            >
              {task.kind === "essay" || task.kind === "speak" ? "Показать разбор" : "Проверить"}
            </button>
          )}
          {task.hint && !hintOpen && (
            <button type="button" className={s.hintBtn} onClick={() => setHintOpen(true)}>
              Подсказка
            </button>
          )}
        </div>
      )}

      {hintOpen && task.hint && !locked && <div className={s.hint}>{task.hint}</div>}

      {/* ------------------------------------------------ разбор */}
      {status === "right" && (
        <div className={`${s.feedback} ${s.good}`}>
          <b>Верно.</b> {task.why}
        </div>
      )}

      {status === "wrong" && (
        <div className={`${s.feedback} ${s.bad}`}>
          <b>Пока не так.</b>{" "}
          {task.kind === "code" && text
            ? `В коде ${missingParts(task, text).join(", ")}. Попробуй ещё, попытки не ограничены.`
            : "Попробуй ещё раз — попытки не ограничены."}
        </div>
      )}

      {status === "shown" && (
        <div className={`${s.feedback} ${s.neutral}`}>
          {task.kind === "essay" && (
            <>
              {/* Счёт слов, а не оценка. Cambridge требует от письма «25 words
                  or more», и ученику надо знать, добрал ли он объём. Короткий
                  ответ не объявляется ошибкой: письмо машина не оценивает. */}
              {task.minWords && (
                <p className={s.exampleExplain}>
                  {(() => {
                    const napisano = text.trim().split(/\s+/).filter(Boolean).length;
                    return napisano >= task.minWords
                      ? `Слов написано: ${napisano}, нужно было от ${task.minWords}. Объём набран.`
                      : `Слов написано: ${napisano}, а нужно от ${task.minWords}. Допиши и сравни снова.`;
                  })()}
                </p>
              )}
              <b>Так мог бы выглядеть ответ.</b>
              <p className={s.sample}>{task.sample}</p>
              <p className={s.exampleExplain}>Сравни со своим:</p>
              <ul className={s.checklist}>
                {task.checklist.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <p className={s.sample}>{task.why}</p>
        </div>
      )}
    </section>
  );
}
