import LoginForm from "@/components/auth/LoginForm";
import { kudaVernutsya } from "@/lib/auth/vozvrat";
import { pochtaNastroena } from "@/lib/mail/send";

export const metadata = {
  title: "Вход",
  description: "Вход в аккаунт CodeNTalk.",
};

type Props = { searchParams: Promise<{ dalshe?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const { dalshe } = await searchParams;
  return (
    <main className="wrap">
      {/* Ссылка на смену пароля показывается, только когда письма и правда
          уходят. Предлагать то, что не сработает, хуже, чем не предлагать
          вовсе: человек потратит попытку и решит, что сломан весь сайт. */}
      <LoginForm dalshe={kudaVernutsya(dalshe)} mozhnoVosstanovit={pochtaNastroena()} />
    </main>
  );
}
