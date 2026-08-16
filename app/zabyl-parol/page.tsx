import Link from "next/link";
import ZabylForm from "@/components/auth/ZabylForm";
import { pochtaNastroena } from "@/lib/mail/send";

export const metadata = {
  title: "Смена пароля",
  description: "Ссылка для смены забытого пароля на CodeNTalk.",
  // Страница нужна только тому, кто на неё пришёл сам: в поиске ей делать нечего.
  robots: { index: false, follow: false },
};

export default function ZabylParolPage() {
  // Адрес страницы могут набрать руками или сохранить в закладках. Форма,
  // которая заведомо не сработает, здесь хуже прямого объяснения.
  if (!pochtaNastroena()) {
    return (
      <main className="wrap">
        <div style={{ maxWidth: 460, margin: "48px auto" }}>
          <h1>Смена пароля пока вручную</h1>
          <p>
            Отправка писем ещё не подключена, поэтому ссылку прислать не получится. Напиши
            преподавателю — пароль сменят и скажут новый.
          </p>
          <p>
            <Link href="/login">Вернуться ко входу</Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="wrap">
      <ZabylForm />
    </main>
  );
}
