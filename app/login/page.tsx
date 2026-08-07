import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Вход",
  description: "Вход в аккаунт CodeNTalk.",
};

export default function LoginPage() {
  return (
    <main className="wrap">
      <LoginForm />
    </main>
  );
}
