import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import styles from "./SiteHeader.module.css";

/**
 * Шапка сайта.
 *
 * Для вошедшего логотип ведёт в личный кабинет, а не на витрину: домашняя
 * страница ученика — это его курсы, а не рассказ о платформе.
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
        <Link href={user ? "/dashboard" : "/"} className={styles.logo}>
          Code<span className={styles.logoAccent}>N</span>Talk
        </Link>

        {user ? (
          <>
            <nav className={styles.nav}>
              <Link href="/dashboard">Мои курсы</Link>
              <Link href="/">Каталог</Link>
            </nav>
            <div className={styles.end}>
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
            <nav className={styles.nav}>
              <Link href="/#napravleniya">Направления</Link>
              <Link href="/#kak-eto-ustroeno">Как это устроено</Link>
              <Link href="/track/english">Английский бесплатно</Link>
            </nav>
            <div className={styles.end}>
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
