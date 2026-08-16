"use client";

/**
 * Расшифровка записи, спрятанная за кнопку.
 *
 * Здесь сходятся два правила, и оба нельзя нарушить.
 *
 * Первое — доступность: без расшифровки запись бесполезна глухому и тому, кто
 * сейчас без наушников. Значит текст должен быть доступен ВСЕГДА, без условий,
 * без «сначала ответь».
 *
 * Второе — смысл задания: пока текст на виду, «послушай и ответь» превращается
 * в чтение, и умения слушать курс не даёт вовсе.
 *
 * Развязка в том, что кнопка открыта всем и всегда, но нажать её надо нарочно.
 * Никто не заперт, и никто не прочтёт ответ случайно.
 */
import { useState } from "react";
import s from "./lesson.module.css";

export default function Rasshifrovka({ text }: { text: string }) {
  const [vidno, setVidno] = useState(false);

  if (vidno) return <p className={s.transcript}>{text}</p>;

  return (
    <button type="button" className={s.pokazatText} onClick={() => setVidno(true)}>
      Показать текст записи
    </button>
  );
}
