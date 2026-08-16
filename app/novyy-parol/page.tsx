import NovyyParolForm from "@/components/auth/NovyyParolForm";

export const metadata = {
  title: "Новый пароль",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ kod?: string }> };

export default async function NovyyParolPage({ searchParams }: Props) {
  const { kod } = await searchParams;
  return (
    <main className="wrap">
      <NovyyParolForm kod={kod ?? ""} />
    </main>
  );
}
