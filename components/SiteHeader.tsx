import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import ThemeToggle from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

/**
 * Шапка сайта.
 *
 * ЛОГОТИП ВЕДЁТ НА ГЛАВНУЮ — ВСЕГДА. Решение владельца от 4 сентября 2026.
 *
 * ЭТО ОТМЕНЯЕТ прежнее, стоявшее здесь же: «для вошедшего логотип ведёт в
 * личный кабинет, домашняя страница ученика — это его курсы». Логотип в шапке
 * везде означает «на главную», и уводить вошедшего в другое место значит
 * ломать привычку, которая старше нашего сайта. В кабинет ведёт «Мои курсы».
 *
 * Отдельной ссылки «Каталог» больше нет: на главной и лежит каталог, а
 * логотип теперь туда же и ведёт. Две ссылки в одно место — лишний выбор.
 */
export default async function SiteHeader() {
  const session = await auth();
  const user = session?.user;
  const initials = user?.name
    ? user.name
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("")
    : "";

  return (
    <header className={styles.header}>
      <div className={`wrap-wide ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Code<span className={styles.logoAccent}>N</span>Talk
        </Link>

        {user ? (
          <>
            <nav className={styles.nav}>
              <Link href="/dashboard">Мои курсы</Link>
            </nav>
            <div className={styles.end}>
              <ThemeToggle />
              <span className={styles.avatar} title={user.name ?? ""}>
                {initials}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className={styles.linkBtn} type="submit">
                  Выйти
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            {/* Отдельный признак, потому что на телефоне эта ссылка
                прячется: она ведёт на то же место, где человек и стоит.

                Разделов «Как это работает» и «Что внутри» больше нет — они
                убраны с главной по решению владельца, и ссылки на них ушли
                вместе с ними. Мёртвый якорь хуже отсутствующего. */}
            <nav className={`${styles.nav} ${styles.navAnchors}`}>
              <Link href="/#napravleniya">Направления</Link>
            </nav>
            <div className={styles.end}>
              <ThemeToggle />
              <Link className="btn ghost" href="/login">
                Войти
              </Link>
              <Link className="btn" href="/register">
                Создать аккаунт
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
