"use client";

import { PageData } from "@/contexts/locale.context/locale.context";
import useLocale from "@/hooks/useLocale";
import { Locale } from "@/types/locale";
import React from "react";

export default function FloatingButton() {
  const { dict } = useLocale() as { dict: PageData };

  return (
    <div className="fixed bottom-0 w-full">
      <div
        className="h-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(248, 250, 252, 0.00) 0%, #F8FAFC 100%",
        }}
      />
      <div className="bg-bg-elevation1 flex justify-center w-full h-[84px] pt-2 pb-5 mobile:px-5 laptop:px-10">
        <button className="max-w-[1220px] bg-bg-primary p-4 text-heading18Bd w-full rounded-[12px]">
          {dict.applyButton.title}
        </button>
      </div>
    </div>
  );
}
