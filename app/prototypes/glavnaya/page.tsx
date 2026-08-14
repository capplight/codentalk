"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import picker from "./picker.module.css";
import s from "./variants.module.css";

/**
 * Пробы первого экрана главной.
 *
 * Страница ВРЕМЕННАЯ и живёт отдельно от боевого кода: ничего отсюда никуда не
 * импортируется, а после выбора вся папка удаляется. Порядок описан в навыке
 * .claude/skills/prototype.
 *
 * Числа вписаны прямо здесь, а не берутся из курсов: в клиентском компоненте
 * нельзя трогать courses/index.ts — он тянет содержание всех курсов целиком.
 * Однажды такой импорт раздул страницу с 5 кБ до 149 кБ.
 */

const LESSONS = 204;
const HOURS = 44;

/* ---------------------------------------------------------------- 1 */
/** Ось: сдержанность. Первый экран — обещание, и больше ничего. */
function Quiet() {
  return (
    <div className={s.quiet}>
      <h1 className={s.quietTitle}>Учись в своём темпе</h1>
      <p className={s.lead}>
        Английский и основы веб-разработки бесплатны навсегда. Остальное — по одной подписке,
        которую можно приостановить в любой месяц. Вернёшься на тот же урок хоть через полгода.
      </p>
      <div className={s.actions}>
        <a className="btn big" href="#">
          Начать с английского
        </a>
        <a className="btn big ghost" href="#">
          Посмотреть направления
        </a>
      </div>
      <p className={s.facts}>
        <span>
          <span className={s.factNum}>{LESSONS}</span> урока открыто
        </span>
        <span>
          <span className={s.factNum}>{HOURS} часов</span> занятий с проверкой
        </span>
        <span>
          <span className={s.factNum}>0 ₸</span> английский навсегда
        </span>
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- 2 */
/** Ось: показать продукт. Справа не картинка, а настоящий кусок урока. */
function Showcase() {
  return (
    <div className={s.showcase}>
      <div className={s.showcaseCol}>
        <span className={s.eyebrow}>Языки и программирование</span>
        <h1 className={s.showcaseTitle}>Сначала понятно, потом упражнение, потом проверка</h1>
        <p className={s.lead}>
          Каждый урок объясняет правило простыми словами и сразу даёт разобрать его на деле.
          Занимает восемь–пятнадцать минут.
        </p>
        <div className={s.actions}>
          <a className="btn big" href="#">
            Начать бесплатно
          </a>
          <a className="btn big ghost" href="#">
            Что входит в подписку
          </a>
        </div>
        <p className={s.note}>
          {LESSONS} урока открыто · {HOURS} часов занятий с проверкой
        </p>
      </div>

      <div className={s.peek} aria-label="Пример задания из урока">
        <div className={s.peekHead}>
          <span>Английский с нуля · урок 14</span>
          <span>задание 3 из 5</span>
        </div>
        <div className={s.peekTask}>
          <p className={s.peekPrompt}>Твоя сестра говорит по-английски. В каком предложении нет ошибки?</p>
          <div className={s.peekOptions}>
            <div className={s.peekOption}>My sister speak English.</div>
            <div className={`${s.peekOption} ${s.peekOptionRight}`}>My sister speaks English.</div>
            <div className={s.peekOption}>My sister is speak English.</div>
          </div>
        </div>
        <p className={s.peekWhy}>
          Речь об одном человеке, поэтому у глагола появляется окончание -s.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 3 */
/** Ось: сразу к делу. Не реклама, а выбор направления прямо на первом экране. */
function Doing() {
  const picks = [
    { title: "Английский с нуля", note: "202 урока · с экзаменом", free: true },
    { title: "Введение в веб-разработку", note: "2 урока · с экзаменом", free: true },
    { title: "Казахский язык", note: "готовится", free: false },
    { title: "Python", note: "готовится", free: false },
  ];

  return (
    <div className={s.doing}>
      <h1 className={s.doingTitle}>С чего начнём?</h1>
      <div className={s.picks}>
        {picks.map((p) => (
          <button className={s.pick} key={p.title} type="button">
            <span className={`pill ${p.free ? s.pillFree : s.pillSoon}`}>
              {p.free ? "бесплатно" : "скоро"}
            </span>
            <span className={s.pickTitle}>{p.title}</span>
            <span className={s.pickNote}>{p.note}</span>
          </button>
        ))}
      </div>
      <p className={s.note}>
        Английский и основы веб-разработки бесплатны навсегда. Остальное — по одной подписке,
        два курса одновременно.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- оснастка */

const VARIANTS = [
  { name: "Спокойный", render: () => <Quiet /> },
  { name: "Витрина", render: () => <Showcase /> },
  { name: "За дело", render: () => <Doing /> },
];

export default function Prototypes() {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const highlightRef = useRef<HTMLSpanElement>(null);

  const moveHighlight = useCallback(() => {
    const el = itemsRef.current[current];
    const hl = highlightRef.current;
    if (!el || !hl) return;
    hl.style.width = `${el.offsetWidth}px`;
    hl.style.transform = `translateX(${el.offsetLeft}px)`;
  }, [current]);

  // Положение подсветки берётся до отрисовки, поэтому при загрузке она не едет.
  useLayoutEffect(moveHighlight, [moveHighlight]);

  useEffect(() => {
    const first = Number(new URLSearchParams(location.search).get("v"));
    if (first >= 1 && first <= VARIANTS.length) setCurrent(first - 1);
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const url = new URL(location.href);
    url.searchParams.set("v", String(current + 1));
    history.replaceState(null, "", url);
  }, [current]);

  useEffect(() => {
    window.addEventListener("resize", moveHighlight);
    return () => window.removeEventListener("resize", moveHighlight);
  }, [moveHighlight]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= VARIANTS.length) setCurrent(num - 1);
      else if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % VARIANTS.length);
      else if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + VARIANTS.length) % VARIANTS.length);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main>
      <div className="wrap-wide">
        {/* Смена пробы мгновенная: переключают её сотни раз за сессию, и
            анимация тут сделала бы сравнение медленным. */}
        <section className={s.stage}>{VARIANTS[current].render()}</section>
      </div>

      <nav className={picker.picker} data-ready={ready ? "" : undefined} aria-label="Пробы первого экрана">
        <span className={picker.highlight} ref={highlightRef} aria-hidden="true" />
        {VARIANTS.map((v, i) => (
          <button
            key={v.name}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className={picker.item}
            data-active={i === current ? "" : undefined}
            aria-current={i === current ? "true" : undefined}
            onClick={() => setCurrent(i)}
          >
            {v.name}
          </button>
        ))}
      </nav>
    </main>
  );
}
