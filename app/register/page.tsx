import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Создать аккаунт",
  description: "Регистрация на CodeNTalk — чтобы сохранять успехи в обучении.",
};

export default function RegisterPage() {
  return (
    <main className="wrap">
      <RegisterForm />
    </main>
  );
}
