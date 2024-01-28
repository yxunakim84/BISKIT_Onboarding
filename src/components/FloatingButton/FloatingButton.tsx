"use client";

import { PageData } from "@/contexts/locale.context/locale.context";
import useLocale from "@/hooks/useLocale";

export default function FloatingButton() {
  const { dict } = useLocale() as { setLocale: any; dict: PageData };

  return (
    <div className="fixed bottom-0 w-full">
      <div
        className="h-6"
        style={{
          background: "linear-gradient(180deg, rgba(248, 250, 252, 0.00) 0%, #F8FAFC 100%",
        }}
      />
      <div className="flex h-[84px] w-full justify-center bg-bg-elevation1 pb-5 pt-2 mobile:px-5 laptop:px-10">
        <button className="w-full max-w-[1220px] rounded-[12px] bg-bg-primary p-4 text-heading18Bd">
          {dict?.applyButton?.title}
        </button>
      </div>
    </div>
  );
}
