"use client";

/**
 * Кнопка «послушать».
 *
 * Нужна там, где проигрыватель во всю ширину был бы нелепым: у слова в словаре
 * и у фразы, которую ученик повторяет вслух. Полосу перемотки к слову `water`
 * ставить незачем — там одна секунда.
 *
 * Если записи нет, кнопка исчезает. Обещать звук и не дать его нельзя, а
 * сломанная кнопка хуже её отсутствия. Постоянно так быть не должно: за
 * полнотой записей следит `npm run check:content`.
 */
import { useRef, useState } from "react";
import s from "./lesson.module.css";

export default function Zvuk({
  src,
  chto,
  vid = "znak",
}: {
  src: string;
  /** Что звучит — для тех, кто слушает страницу голосом. */
  chto: string;
  vid?: "znak" | "stroka";
}) {
  const [zvuchit, setZvuchit] = useState(false);
  const [slomana, setSlomana] = useState(false);
  const ssylka = useRef<HTMLAudioElement | null>(null);

  if (slomana) return null;

  const nazhali = (): void => {
    const zvuk = ssylka.current;
    if (!zvuk) return;
    if (zvuchit) {
      zvuk.pause();
      zvuk.currentTime = 0;
      setZvuchit(false);
      return;
    }
    void zvuk.play().catch(() => setSlomana(true));
  };

  return (
    <>
      <button
        type="button"
        className={vid === "znak" ? s.zvukZnak : s.zvukStroka}
        onClick={nazhali}
        aria-label={`Послушать: ${chto}`}
      >
        <span aria-hidden="true">{zvuchit ? "◼" : "▶"}</span>
        {vid === "stroka" && <span>{zvuchit ? "Остановить" : "Послушать"}</span>}
      </button>
      <audio
        ref={ssylka}
        src={src}
        preload="none"
        onPlay={() => setZvuchit(true)}
        onEnded={() => setZvuchit(false)}
        onPause={() => setZvuchit(false)}
        onError={() => setSlomana(true)}
      />
    </>
  );
}
