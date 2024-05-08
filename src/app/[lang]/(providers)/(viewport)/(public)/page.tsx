import PageDetail from "@/components/PageDetail";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary((lang as "ko" | "en") || "en");

  return (
    <main className="w-screen">
      <PageDetail dict={dict} lang={lang} />
    </main>
  );
}
