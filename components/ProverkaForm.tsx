"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidSerialFormat } from "@/lib/domain/certificate";
import styles from "./auth/AuthForm.module.css";

/**
 * Ввод номера сертификата.
 *
 * Проверка формы номера идёт здесь же, до обращения к серверу: человек
 * переписывает номер с бумаги и ошибается в знаке чаще, чем встречает
 * поддельный сертификат. Сказать ему об опечатке сразу — быстрее и понятнее,
 * чем показать «не найдено».
 *
 * Дефисы человек может не ставить, а буквы набрать строчными — приводим сами.
 * Требовать точного написания значило бы наказывать за то, что и так наше
 * оформление.
 */
export default function ProverkaForm() {
  const router = useRouter();
  const [oshibka, setOshibka] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOshibka(null);

    const vvod = String(new FormData(event.currentTarget).get("nomer") ?? "");
    const tolkoZnaki = vvod.toUpperCase().replace(/[^0-9A-Z]/g, "");

    if (tolkoZnaki.length !== 12) {
      setOshibka("В номере двенадцать знаков. Проверь, все ли переписаны.");
      return;
    }

    const nomer = `${tolkoZnaki.slice(0, 4)}-${tolkoZnaki.slice(4, 8)}-${tolkoZnaki.slice(8, 12)}`;
    if (!isValidSerialFormat(nomer)) {
      setOshibka("Такого номера быть не может — в нём есть посторонние знаки.");
      return;
    }

    router.push(`/certificate/${nomer}`);
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Проверка сертификата</h1>
      <p className={styles.lead}>
        Введи номер с документа. Покажем, кому и за какой курс он выдан и не отозван ли.
      </p>

      <form className={styles.card} onSubmit={onSubmit} noValidate>
        {oshibka && <div className={styles.formError}>{oshibka}</div>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="nomer">
            Номер сертификата
          </label>
          <input
            className={styles.input}
            id="nomer"
            name="nomer"
            placeholder="7K2M-9XQF-3BTD"
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            required
          />
          <span className={styles.hint}>
            Двенадцать знаков, три группы по четыре. Дефисы можно не ставить.
          </span>
        </div>

        <button className={`btn big ${styles.submit}`} type="submit">
          Проверить
        </button>
      </form>
    </div>
  );
}
