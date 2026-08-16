"use client";

import { useState } from "react";
import Link from "next/link";
import { zabylSchema } from "@/lib/auth/schema";
import styles from "./AuthForm.module.css";

/**
 * Просьба прислать ссылку на смену пароля.
 *
 * После отправки форма пропадает и остаётся одно сообщение. Так человек не
 * нажимает «отправить» второй и третий раз, не дождавшись письма, — а именно
 * это и делают, когда форма остаётся на месте.
 */
export default function ZabylForm() {
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = zabylSchema.safeParse(data);
    if (!parsed.success) {
      setFieldError(parsed.error.flatten().fieldErrors.email?.[0] ?? "Проверь адрес почты");
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/v1/auth/zabyl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFormError(payload?.error?.message ?? "Не удалось отправить письмо");
        return;
      }

      setSent(true);
    } catch {
      setFormError("Сеть не отвечает. Проверь соединение и попробуй ещё раз.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Письмо отправлено</h1>
        <p className={styles.gotovo}>
          Если такая почта у нас есть, письмо со ссылкой уже в ящике. Загляни и в папку
          «Спам» — новые отправители попадают туда часто. Ссылка годна час.
        </p>
        <p className={styles.switch}>
          <Link href="/login">Вернуться ко входу</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Смена пароля</h1>
      <p className={styles.lead}>
        Укажи почту, на которую заведён аккаунт. Пришлём ссылку — по ней придумаешь новый
        пароль.
      </p>

      <form className={styles.card} onSubmit={onSubmit} noValidate>
        {formError && <div className={styles.formError}>{formError}</div>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Почта
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!fieldError}
            required
          />
          {fieldError && <span className={styles.fieldError}>{fieldError}</span>}
        </div>

        <button className={`btn big ${styles.submit}`} type="submit" disabled={pending}>
          {pending ? "Отправляем…" : "Прислать ссылку"}
        </button>
      </form>

      <p className={styles.switch}>
        Пароль вспомнился? <Link href="/login">Войти</Link>
      </p>
    </div>
  );
}
