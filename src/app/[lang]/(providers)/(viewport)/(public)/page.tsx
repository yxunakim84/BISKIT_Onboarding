import PageDetail from "@/components/PageDetail";
import useLocale from "@/hooks/useLocale";
import { enDictionary, getDictionary, koDictionary } from "@/lib/dictionary";

// export const getStaticProps: GetStaticProps = async ({
//   locale = "en" || "ko",
// }) => {
//   return { props: { ...(await serverSideTranslations(locale, ["complete"])) } };
// };

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary((lang as "ko" | "en") || "en");

  return (
    <main className="w-screen">
      <PageDetail dict={dict} lang={lang} />
    </main>
  );
}
