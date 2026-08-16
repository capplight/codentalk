"use client";

import { useState } from "react";
import Link from "next/link";
import { passwordSchema } from "@/lib/auth/schema";
import styles from "./AuthForm.module.css";

/**
 * Новый пароль по ссылке из письма.
 *
 * Код приходит адресом страницы. Пустой код — не ошибка ученика, а испорченная
 * ссылка: почтовые программы переносят длинные адреса, и половина остаётся за
 * переносом. Поэтому сообщение объясняет, что делать, а не винит.
 */
export default function NovyyParolForm({ kod }: { kod: string }) {
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (!kod) {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Ссылка неполная</h1>
        <div className={styles.formError}>
          Похоже, адрес скопирован не целиком. Открой ссылку из письма нажатием, а не
          копированием, — либо запроси новую.
        </div>
        <p className={styles.switch}>
          <Link href="/zabyl-parol">Запросить новую ссылку</Link>
        </p>
      </div>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldError(null);

    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") ?? "");

    const parsed = passwordSchema.safeParse(password);
    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Проверь пароль");
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/v1/auth/novyy-parol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kod, password }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFormError(payload?.error?.message ?? "Не удалось сменить пароль");
        return;
      }

      // Дальше человек входит сам. Войти его прямо отсюда мешает мелочь:
      // адреса почты на этой странице нет, а отдавать его в браузер по коду из
      // письма — лишняя щедрость ради одного сэкономленного нажатия.
      setDone(true);
    } catch {
      setFormError("Сеть не отвечает. Проверь соединение и попробуй ещё раз.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Пароль сменён</h1>
        <p className={styles.gotovo}>Теперь войди с новым паролем.</p>
        <p className={styles.switch}>
          <Link href="/login">Войти</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Новый пароль</h1>
      <p className={styles.lead}>Придумай пароль, который не жалко запомнить надолго.</p>

      <form className={styles.card} onSubmit={onSubmit} noValidate>
        {formError && <div className={styles.formError}>{formError}</div>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!fieldError}
            required
          />
          {fieldError ? (
            <span className={styles.fieldError}>{fieldError}</span>
          ) : (
            <span className={styles.hint}>
              Не короче восьми знаков. Длинная фраза надёжнее короткой мешанины знаков.
            </span>
          )}
        </div>

        <button className={`btn big ${styles.submit}`} type="submit" disabled={pending}>
          {pending ? "Меняем…" : "Сменить пароль"}
        </button>
      </form>
    </div>
  );
}
