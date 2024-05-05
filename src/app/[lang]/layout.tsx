import { pretendard } from "@/theme/font";
import { Locale } from "@/types/locale";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Script from "next/script";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "BISKIT | 글로벌한 대학생활의 시작",
  description: "BISKIT에서 우리 학교의 외국인, 한국인 친구들과 교류해보세요!",
  keywords:
    "대학, 대학교, 대학생, 외국인, 외국인친구, 모임, 한국인친구, 언어교환, 학교, 언어, 취미, 관심사, 친구만들기, 점심, 밥, 소모임, 식사, 스터디, 20대, 교환학생, 친구, 한국인국제교류, 밋업, 글로벌, 캠퍼스",
  icons: {
    icon: "https://biskit-bucket.s3.ap-northeast-2.amazonaws.com/logo/biskit-image.png",
  },
  openGraph: {
    images: [
      {
        url: "https://biskit-bucket.s3.ap-northeast-2.amazonaws.com/logo/biskit-image.png",
      },
    ],
  },
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang} className={pretendard.className}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1B5D11GK85"></Script>
        <Script
          async
          strategy="afterInteractive"
          id="analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1B5D11GK85');
          `,
          }}
        />
      </head>

      <body id="body" className="h-screen antialiased">
        {children}
      </body>
      <GoogleAnalytics gaId="G-1B5D11GK85" />
    </html>
  );
}
