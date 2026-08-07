"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "./AuthForm.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setPending(true);

    const data = new FormData(event.currentTarget);

    try {
      const result = await signIn("credentials", {
        email: String(data.get("email") ?? ""),
        password: String(data.get("password") ?? ""),
        redirect: false,
      });

      if (result?.error) {
        // Намеренно не уточняем, что именно неверно: сообщение вида
        // «такой почты нет» подсказывает подбирающему, какие адреса
        // зарегистрированы.
        setFormError("Почта или пароль не подходят");
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
      <h1 className={styles.title}>Вход</h1>
      <p className={styles.lead}>Продолжим с того места, где ты остановился.</p>

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
            required
          />
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
            autoComplete="current-password"
            required
          />
        </div>

        <button className={`btn big ${styles.submit}`} type="submit" disabled={pending}>
          {pending ? "Входим…" : "Войти"}
        </button>
      </form>

      <p className={styles.switch}>
        Ещё нет аккаунта? <Link href="/register">Создать</Link>
      </p>
    </div>
  );
}
