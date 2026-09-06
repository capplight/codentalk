"use client";

/**
 * Примерочная: один и тот же кусок страницы курса в разных наборах цветов.
 *
 * Наборы кладутся переменными прямо на обёртку, а не на всю страницу: тогда
 * шапка сайта остаётся в своём виде, и видно, как выбранный набор будет
 * смотреться рядом с уже существующим. Разметка внутри — та же, что на
 * настоящей карте курса, и берёт те же имена классов.
 */

import { useState } from "react";
import { adresZnachka } from "@/lib/content/znaki";
import t from "../learn/tropa.module.css";

type Nabor = {
  imya: string;
  pro: string;
  /** Что придётся поправить сверх листа, если взять этот набор. */
  cena?: string;
  cveta: Record<string, string>;
};

const OBSHCHIE_TYOMNYE = {
  "--accent": "#8ba6ff",
  "--accent-strong": "#a5baff",
  "--accent-ink": "#b3c6ff",
  "--violet": "#c7a9ff",
  "--violet-soft": "#322a5c",
  "--bad": "#f0918a",
  "--bad-soft": "#402529",
  "--btn-text": "#141830",
};

const NABORY: Nabor[] = [
  {
    imya: "Сейчас: синий",
    pro: "То, что стоит на сайте сегодня. Глубокая синь с фиолетовым отливом.",
    cveta: {
      ...OBSHCHIE_TYOMNYE,
      "--paper": "#181c2e",
      "--paper-alt": "#1f243a",
      "--surface": "#262c46",
      "--ink": "#eef1f9",
      "--ink-soft": "#a6adc8",
      "--line": "#363d5e",
      "--accent-soft": "#2b3465",
      "--good": "#5ccfa4",
      "--good-soft": "#1a3b33",
      "--amber": "#f0c07d",
      "--amber-soft": "#3b3320",
    },
  },
  {
    imya: "Синий, сумерки",
    pro: "Тот же оттенок, но лист заметно светлее. Если дело только в темноте — этого хватит.",
    cveta: {
      ...OBSHCHIE_TYOMNYE,
      "--paper": "#212640",
      "--paper-alt": "#2a3050",
      "--surface": "#333a5e",
      "--ink": "#eef1f9",
      "--ink-soft": "#b0b7d0",
      "--line": "#454d76",
      "--accent-soft": "#39427a",
      "--good": "#5ccfa4",
      "--good-soft": "#22463c",
      "--amber": "#f0c07d",
      "--amber-soft": "#463c26",
    },
  },
  {
    imya: "Графит",
    pro: "Нейтральная основа без цветного отлива. Ничего не спорит со смысловыми цветами.",
    cveta: {
      ...OBSHCHIE_TYOMNYE,
      "--paper": "#1c1e24",
      "--paper-alt": "#232730",
      "--surface": "#2b303c",
      "--ink": "#eceef4",
      "--ink-soft": "#a7aebd",
      "--line": "#3a4150",
      "--accent-soft": "#26304a",
      "--good": "#5ccfa4",
      "--good-soft": "#1d3831",
      "--amber": "#f0c07d",
      "--amber-soft": "#3a3122",
    },
  },
  {
    imya: "Тёплый уголь",
    pro: "Коричневатая основа. Тепло и редко: у обучающих платформ такого почти не бывает.",
    cena: "Янтарный «работа закрыта» уведён светлее, иначе сливался бы с листом.",
    cveta: {
      ...OBSHCHIE_TYOMNYE,
      "--paper": "#1e1b19",
      "--paper-alt": "#272220",
      "--surface": "#2f2926",
      "--ink": "#f2eee9",
      "--ink-soft": "#b6aca2",
      "--line": "#423a35",
      "--accent-soft": "#2a2c42",
      "--good": "#5ccfa4",
      "--good-soft": "#1e332c",
      "--amber": "#ffd9a0",
      "--amber-soft": "#453427",
    },
  },
  {
    imya: "Сине-зелёный",
    pro: "Глубокий тил. Самая узнаваемая из тёмных основ.",
    cena: "Зелёный «пройдено» уведён в лаймовый, иначе садится на фон.",
    cveta: {
      ...OBSHCHIE_TYOMNYE,
      "--paper": "#13201f",
      "--paper-alt": "#1a2b29",
      "--surface": "#213533",
      "--ink": "#e9f2f0",
      "--ink-soft": "#9fb5b1",
      "--line": "#2f4744",
      "--accent-soft": "#1f3a4a",
      "--good": "#86e0a0",
      "--good-soft": "#1c3a2c",
      "--amber": "#f0c07d",
      "--amber-soft": "#3a3524",
    },
  },
  {
    imya: "Светлый",
    pro: "Нынешний светлый лист. Стоит здесь, чтобы сравнивать было с чем: вернуть его умолчанием — тоже решение.",
    cveta: {
      "--paper": "#f6f8fb",
      "--paper-alt": "#eef2f7",
      "--surface": "#ffffff",
      "--ink": "#16202e",
      "--ink-soft": "#5b6b7f",
      "--line": "#dde3ea",
      "--accent": "#2563eb",
      "--accent-strong": "#1d4ed8",
      "--accent-ink": "#123f88",
      "--accent-soft": "#e8f0fd",
      "--violet": "#6d28d9",
      "--violet-soft": "#f1ebfe",
      "--good": "#0e7a5a",
      "--good-soft": "#e3f4ee",
      "--amber": "#8a5a11",
      "--amber-soft": "#fdf6e9",
      "--bad": "#b23b32",
      "--bad-soft": "#fbeae8",
      "--btn-text": "#ffffff",
    },
  },
];

/** Уроки для примера — взяты из настоящего модуля «Приветствие». */
const UROKI = [
  { imya: "Hello и hi", chto: "пройден", gotov: true },
  { imya: "Как тебя зовут", chto: "14 мин", seychas: true },
  { imya: "Как дела и вежливые слова", chto: "15 мин" },
  { imya: "Я, ты, он: местоимения", chto: "14 мин" },
  { imya: "Слушаем знакомство", chto: "слушание · 13 мин", znak: "1f3a7" },
  { imya: "Читаем переписку", chto: "чтение · 12 мин", znak: "1f4d6" },
];

export default function Palitra() {
  const [kakoy, setKakoy] = useState(0);
  const nabor = NABORY[kakoy];

  return (
    <main className="wrap-wide" style={{ paddingBottom: 48 }}>
      <h1 style={{ marginTop: 24 }}>Примерочная цветов</h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: 620 }}>
        Один и тот же кусок страницы курса. Щёлкай наборы подряд и смотри, на
        каком глазу спокойнее. Выбранный перенесу в сайт целиком — эта страница
        после выбора удаляется.
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "18px 0 10px" }}>
        {NABORY.map((n, i) => (
          <button
            key={n.imya}
            type="button"
            onClick={() => setKakoy(i)}
            className={i === kakoy ? "btn" : "btn btn--ghost"}
          >
            {n.imya}
          </button>
        ))}
      </div>

      <p style={{ color: "var(--ink-soft)", fontSize: 14, maxWidth: 620 }}>
        {nabor.pro}
        {nabor.cena && (
          <>
            {" "}
            <b style={{ color: "var(--ink)" }}>Цена выбора:</b> {nabor.cena}
          </>
        )}
      </p>

      {/* Набор кладётся переменными на обёртку — внутри всё берёт цвет отсюда,
          а шапка сайта остаётся своей: видно, как выбранное будет соседствовать
          с уже существующим. */}
      <div
        style={{
          ...(nabor.cveta as React.CSSProperties),
          background: "var(--paper)",
          color: "var(--ink)",
          borderRadius: 20,
          padding: "18px 20px 26px",
          border: "1px solid var(--line)",
          marginTop: 10,
        }}
      >
        <div className={t.svod}>
          <div className={t.svodPolosa} aria-hidden>
            <i style={{ width: "22%" }} />
          </div>
          <span className={t.svodStroka}>
            Пройдено <b>16</b> из 258 уроков · сдано <b>1</b> из 25 работ
          </span>
        </div>

        <div className={t.karta}>
          <details className={t.chast} open>
            <summary className={t.chastShapka}>
              <span className={t.chastImya}>Я и другие</span>
              <span className={t.chastVyvod}>Назвать себя, спросить о другом, ответить</span>
              <span className={t.chastSchyot}>11 из 71</span>
            </summary>
            <div className={t.chastTelo}>
              <details className={t.modul}>
                <summary className={t.modulShapka}>
                  <span className={`${t.nomer} ${t.nomerGotov}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/twemoji/1f524.svg" alt="" width={22} height={22} />
                  </span>
                  <span className={t.modulImyaStolb}>
                    <h2 className={t.modulImya}>Алфавит и своё имя</h2>
                    <span className={t.modulNomer}>Модуль 1 · 10 уроков</span>
                  </span>
                  <span className={t.polosa} aria-hidden>
                    <i style={{ width: "100%" }} />
                  </span>
                  <span className={t.modulSchyot}>10 из 10</span>
                </summary>
              </details>

              <details className={`${t.modul} ${t.modulSeychas}`} open>
                <summary className={t.modulShapka}>
                  <span className={`${t.nomer} ${t.nomerSeychas}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/twemoji/1f44b.svg" alt="" width={22} height={22} />
                  </span>
                  <span className={t.modulImyaStolb}>
                    <h2 className={t.modulImya}>Приветствие</h2>
                    <span className={t.modulNomer}>Модуль 2 · 10 уроков</span>
                  </span>
                  <span className={t.polosa} aria-hidden>
                    <i style={{ width: "10%" }} />
                  </span>
                  <span className={t.modulSchyot}>1 из 10</span>
                </summary>

                <div className={t.modulTelo}>
                  <div className={t.vyvody}>
                    <span className={t.vyvodyImya}>Чему научишься в модуле</span>
                    <ul>
                      <li>здороваться, выбирая приветствие по времени дня, и прощаться</li>
                      <li>называть своё имя и понимать, когда имя спрашивают</li>
                    </ul>
                  </div>

                  <ol className={t.tropa}>
                    {UROKI.map((u, i) => (
                      <li
                        className={`${t.uzel} ${i % 2 === 0 ? t.sleva : t.sprava}`}
                        key={u.imya}
                      >
                        <span className={t.uzelSsylka}>
                          <span
                            className={`${t.krug} ${u.gotov ? t.krugGotov : ""} ${
                              u.seychas ? t.krugSeychas : ""
                            }`}
                            aria-hidden
                          >
                            {u.gotov ? "✓" : i + 1}
                          </span>
                          <span className={t.podpis}>
                            {u.seychas && <span className={t.tuty}>ты здесь</span>}
                            <span className={t.imyaUroka}>{u.imya}</span>
                            <span className={t.melko}>
                              {u.znak && (
                                <>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    className={t.znachokVida}
                                    src={adresZnachka(u.znak)}
                                    alt=""
                                    width={14}
                                    height={14}
                                  />
                                </>
                              )}
                              {u.chto}
                            </span>
                          </span>
                        </span>
                      </li>
                    ))}

                    <li className={`${t.uzel} ${t.sleva} ${t.rabota} ${t.rabotaZakryta}`}>
                      <span className={t.uzelSsylka}>
                        <span className={t.krug} aria-hidden>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/twemoji/1f512.svg" alt="" width={18} height={18} />
                        </span>
                        <span className={t.podpis}>
                          <span className={t.imyaUroka}>Проверочная работа</span>
                          <span className={t.melko}>
                            откроется, когда пройдены все уроки модуля
                          </span>
                        </span>
                      </span>
                    </li>
                  </ol>
                </div>
              </details>
            </div>
          </details>
        </div>

        {/* Кусок урока: на нём видно, как читается текст подолгу и как выглядят
            карточки примеров — то, ради чего цвет и выбирается. */}
        <div style={{ maxWidth: 660, margin: "20px auto 0" }}>
          <div className={t.vyvody} style={{ marginBottom: 12 }}>
            <span className={t.vyvodyImya}>Шаг 4 из 26 · случай 2 из 9</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", margin: "0 0 10px" }}>
            По-русски глагола нет вовсе
          </h2>
          <p style={{ color: "var(--ink-soft)", margin: "0 0 12px" }}>
            «Я Алим», «я дома» — по-английски глагол обязателен.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["I am a student.", "Я студент."],
              ["I am ready.", "Я готов."],
            ].map(([en, ru]) => (
              <div
                key={en}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: "10px 13px",
                }}
              >
                <div style={{ fontWeight: 600 }}>{en}</div>
                <div style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 2 }}>{ru}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              borderRadius: 16,
              padding: 16,
              display: "flex",
              gap: 14,
              background: "var(--bad-soft)",
              border: "1px solid var(--bad)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--bad)",
                color: "var(--btn-text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                flex: "none",
              }}
            >
              !
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700 }}>Так сказать нельзя</div>
              <p style={{ margin: "8px 0 0" }}>I student. — глагол пропущен.</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button className="btn" type="button">
              Дальше
            </button>
            <button className="btn btn--ghost" type="button">
              Подсказка
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
