import PageDetail from "@/components/PageDetail";
import { getDictionary } from "@/lib/dictionary";
import Head from "next/head";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary((lang as "ko" | "en") || "en");

  return (
    <main className="w-screen">
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-1B5D11GK85');
            `,
            }}
          ></script>
        </Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1B5D11GK85"></script>
      </>
      <PageDetail dict={dict} lang={lang} />
    </main>
  );
}
