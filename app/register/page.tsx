import RegisterForm from "@/components/auth/RegisterForm";
import { kudaVernutsya } from "@/lib/auth/vozvrat";

export const metadata = {
  title: "Создать аккаунт",
  description: "Регистрация на CodeNTalk — чтобы сохранять успехи в обучении.",
};

type Props = { searchParams: Promise<{ dalshe?: string }> };

export default async function RegisterPage({ searchParams }: Props) {
  const { dalshe } = await searchParams;
  return (
    <main className="wrap">
      <RegisterForm dalshe={kudaVernutsya(dalshe)} />
    </main>
  );
}
