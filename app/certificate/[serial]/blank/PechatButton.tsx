"use client";

/**
 * Кнопка печати.
 *
 * Единственная строка кода на стороне браузера во всём сертификате. Печать
 * можно вызвать и вручную (Ctrl+P), но кнопку ищут глазами — а без неё человек
 * не догадается, что страница для этого и сделана.
 */
export default function PechatButton() {
  return (
    <button className="btn" type="button" onClick={() => window.print()}>
      Печать и сохранение в PDF
    </button>
  );
}
