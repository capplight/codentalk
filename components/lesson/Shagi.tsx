"use client";

/**
 * Пошаговый ход урока: один экран — одна мысль.
 *
 * ЗАЧЕМ. Владелец 3 сентября 2026: «мне не нравится вообще ничего… скучно и
 * объяснения непонятны». Урок сплошной страницей ученик прокручивает глазами и
 * не останавливается ни на чём. Здесь он идёт шагами и на каждом делает одно
 * дело: прочитать случай, посмотреть таблицу, ответить на задание.
 *
 * ПОЧЕМУ ЭКРАНЫ ПРИХОДЯТ ГОТОВЫМИ, А НЕ РИСУЮТСЯ ЗДЕСЬ. Материал урока
 * собирается на сервере (`Ekran`), сюда попадает уже разметкой, а этот
 * компонент только показывает нужный и прячет остальные. Иначе всё содержание
 * курса поехало бы в браузер — та самая ошибка, из-за которой одна страница
 * когда-то раздулась с 5 кБ до 149 кБ.
 *
 * ЧЕГО ЗДЕСЬ НАРОЧНО НЕТ. Замка на задании. Ученик, не ответивший на вопрос,
 * может идти дальше — свой темп это принцип продукта, а не послабление. Кнопка
 * при этом честно называется «Пропустить» и выглядит тише: подсказывать — да,
 * запирать — нет.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLessonFlow } from "./LessonFlow";
import s from "./shagi.module.css";

export interface OpisanieEkrana {
  /** Строка над экраном: «Шаг 4 из 21 · случай 3 из 9» */
  metka: string;
  /** Имя задания, если на экране задание. Пусто — экран материала. */
  zadanie?: string;
  /** Последний экран урока: там своя кнопка «дальше», наша не нужна. */
  konec?: boolean;
}

export default function Shagi({
  ekrany,
  vyhod,
  modul,
  children,
}: {
  ekrany: OpisanieEkrana[];
  /** Куда ведёт крестик: к списку уроков ступени. */
  vyhod: string;
  /** Название модуля — оно стоит под полосой шагов, чтобы не потеряться. */
  modul: string;
  children: React.ReactNode;
}) {
  const [gde, setGde] = useState(0);
  const { otvecheno } = useLessonFlow();
  const verh = useRef<HTMLDivElement | null>(null);

  const vsego = ekrany.length;
  const tekushchiy = ekrany[gde] ?? ekrany[vsego - 1];
  const zhdyotOtveta = Boolean(tekushchiy?.zadanie) && !otvecheno(tekushchiy.zadanie!);

  const dalshe = useCallback(() => {
    setGde((bylo) => Math.min(bylo + 1, vsego - 1));
  }, [vsego]);

  const nazad = useCallback(() => {
    setGde((bylo) => Math.max(bylo - 1, 0));
  }, []);

  // Новый экран начинается сверху. Без этого длинный словарь оставлял
  // страницу прокрученной вниз, и следующий экран открывался серединой.
  useEffect(() => {
    verh.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [gde]);

  /*
   * Клавиши. Стрелки и Enter — то, чем листают, не отрывая рук от клавиатуры.
   * Внутри поля ввода и на кнопке они не перехватываются: там Enter означает
   * «проверить ответ», и увести человека с задания было бы грубо.
   */
  useEffect(() => {
    const nazhali = (e: KeyboardEvent) => {
      const gdeStoim = document.activeElement?.tagName;
      if (gdeStoim === "INPUT" || gdeStoim === "TEXTAREA" || gdeStoim === "BUTTON") return;
      if (e.key === "ArrowRight" || e.key === "Enter") dalshe();
      if (e.key === "ArrowLeft") nazad();
    };
    window.addEventListener("keydown", nazhali);
    return () => window.removeEventListener("keydown", nazhali);
  }, [dalshe, nazad]);

  const spisok = Array.isArray(children) ? children : [children];

  return (
    <div className={s.ramka} ref={verh}>
      <div className={s.verh}>
        <Link className={s.krest} href={vyhod} aria-label="Выйти к списку уроков">
          ✕
        </Link>
        <div className={s.polosa} aria-hidden="true">
          {ekrany.map((_, i) => (
            <i key={i} className={i < gde ? s.proyden : i === gde ? s.tut : undefined} />
          ))}
        </div>
        <span className={s.schyot}>
          {gde + 1}/{vsego}
        </span>
      </div>
      <div className={s.gde}>{modul}</div>

      <div className={s.pole}>
        {spisok.map((ekran, i) => (
          <div
            key={i}
            className={`${s.ekran} ${i === gde ? s.ekranVidno : ""}`}
            // Спрятанный экран не читается голосом и не ловит клавишу Tab:
            // без этого человек, идущий по странице клавиатурой, попадал бы в
            // задания, которых не видит.
            aria-hidden={i === gde ? undefined : true}
            inert={i !== gde}
          >
            <div className={s.metka}>{ekrany[i]?.metka}</div>
            {ekran}
          </div>
        ))}
      </div>

      <div className={s.niz}>
        <button className={s.nazad} type="button" onClick={nazad} disabled={gde === 0}>
          ← Назад
        </button>
        {!tekushchiy?.konec && (
          <button
            className={`${s.dalshe} ${zhdyotOtveta ? s.propustit : ""}`}
            type="button"
            onClick={dalshe}
          >
            {zhdyotOtveta ? "Пропустить" : "Дальше"}
          </button>
        )}
      </div>
      <p className={s.podskazkaKlaviatura}>Листать можно стрелками ← и →</p>
    </div>
  );
}
