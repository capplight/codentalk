"use client";

import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

/**
 * Переключатель светлой и тёмной темы.
 *
 * Выбор запоминается в браузере и применяется до отрисовки страницы — за это
 * отвечает короткий сценарий в app/layout.tsx. Без него страница успевала бы
 * мигнуть светлым, прежде чем стать тёмной.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Хранилище может быть недоступно в частном режиме — тема просто
      // не запомнится, но переключение сработает.
    }
  }

  return (
    <button
      className={styles.themeBtn}
      type="button"
      onClick={toggle}
      // До того как узнали выбор человека, надпись не показываем: иначе на
      // мгновение появится «Тёмная тема» у того, кто уже сидит в тёмной.
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={dark ? "Светлая тема" : "Тёмная тема"}
    >
      {ready ? (dark ? "Светлая тема" : "Тёмная тема") : "Тема"}
    </button>
  );
}
