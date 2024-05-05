import { pretendard } from "@/theme/font";
import { Locale } from "@/types/locale";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "biskit",
  openGraph: {
    images: [
      {
        url: "https://file.notion.so/f/f/534465be-bf13-466e-858b-febadc997650/d3965ba6-6494-4e3f-97dd-5cea6dc70515/biskit_app_icon.png?id=b54fd1b1-ecdd-477c-8bf8-ba3f8dadd232&table=block&spaceId=534465be-bf13-466e-858b-febadc997650&expirationTimestamp=1703613600000&signature=3hwtAwVBfThNAD-0J-gxKOIcO67tttmBvwmmE9F6_9Q&downloadName=biskit_app_icon.png",
      },
    ],
  },
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang} className={pretendard.className}>
      <body id="body" className="h-screen antialiased">
        {children}
      </body>
      <GoogleAnalytics gaId="G-1B5D11GK85" />
    </html>
  );
}
