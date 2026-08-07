"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { registerSchema } from "@/lib/auth/schema";
import styles from "./AuthForm.module.css";

type FieldErrors = Partial<Record<"email" | "password" | "displayName", string[]>>;

export default function RegisterForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const data = Object.fromEntries(new FormData(event.currentTarget));

    // Проверяем теми же правилами, что и сервер, — чтобы не гонять человека
    // за очевидными опечатками через запрос.
    const parsed = registerSchema.safeParse(data);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFieldErrors(payload?.error?.details ?? {});
        setFormError(payload?.error?.message ?? "Не удалось создать аккаунт");
        return;
      }

      // Сразу входим: заставлять человека вводить пароль второй раз подряд —
      // лишний шаг, на котором часть людей отваливается.
      const result = await signIn("credentials", {
        email: parsed.data.email,
        password: parsed.data.password,
        redirect: false,
      });

      if (result?.error) {
        setFormError("Аккаунт создан, но войти не получилось. Попробуй войти вручную.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setFormError("Сеть не отвечает. Проверь соединение и попробуй ещё раз.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Создать аккаунт</h1>
      <p className={styles.lead}>
        Чтобы сохранять успехи и возвращаться туда, где остановился.
      </p>

      <form className={styles.card} onSubmit={onSubmit} noValidate>
        {formError && <div className={styles.formError}>{formError}</div>}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="displayName">
            Как тебя зовут
          </label>
          <input
            className={styles.input}
            id="displayName"
            name="displayName"
            autoComplete="name"
            aria-invalid={!!fieldErrors.displayName}
            required
          />
          {fieldErrors.displayName && (
            <span className={styles.fieldError}>{fieldErrors.displayName[0]}</span>
          )}
        </div>

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
            aria-invalid={!!fieldErrors.email}
            required
          />
          {fieldErrors.email && (
            <span className={styles.fieldError}>{fieldErrors.email[0]}</span>
          )}
        </div>

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
            aria-invalid={!!fieldErrors.password}
            required
          />
          {fieldErrors.password ? (
            <span className={styles.fieldError}>{fieldErrors.password[0]}</span>
          ) : (
            <span className={styles.hint}>Не короче восьми знаков</span>
          )}
        </div>

        <button className={`btn big ${styles.submit}`} type="submit" disabled={pending}>
          {pending ? "Создаём…" : "Создать аккаунт"}
        </button>
      </form>

      <p className={styles.switch}>
        Уже есть аккаунт? <Link href="/login">Войти</Link>
      </p>
    </div>
  );
}
