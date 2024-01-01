"use client";

import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import colors from "@/theme/colors";
import { useRouter } from "next/navigation";
import useLocale from "@/hooks/useLocale";
import { cx } from "class-variance-authority";

export default function Header() {
  const router = useRouter();
  const { locale } = useLocale();
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY || 0;
    const scrollHandler = () => {
      let scrollTop = window.scrollY;
      if (scrollTop !== 0 && scrollTop > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (scrollTop > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
      lastScroll = scrollTop;
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className="mobile:h-[60px] laptop:h-[72px] bg-bg-elevation2">
      <div
        className={cx(
          "fixed z-10 flex bg-opacity-65 transition-transform duration-500 mobile:max-h-[60px] laptop:max-h-[72px] h-full flex-col items-center justify-center bg-bg-elevation2 w-full laptop:border-none",
          isTop && "mobile:border-border-default mobile:border-b",
          isVisible
            ? "translate-y-0"
            : "mobile:-translate-y-[60px] laptop:-translate-y-[72px]"
        )}
      >
        <header className=" z-10 max-w-[1220px] w-full px-5 flex justify-between items-center">
          <Icon
            name="Logo"
            width={51}
            height={24}
            color={colors.content.weaker}
          />
          <div className="flex h-fit items-center">
            <button
              className={cx(
                "py-[10px] px-3",
                locale === "ko"
                  ? "text-content-weak mobile:text-body16Sb laptop:text-heading18Bd"
                  : "text-content-weakest  mobile:text-body16Rg laptop:text-heading18Rg"
              )}
              onClick={() => {
                router.replace("/ko");
              }}
            >
              KOR
            </button>
            <span className="w-[1px] h-6 bg-border-default mobile:mx-1 laptop:mx-2" />
            <button
              className={cx(
                "py-[10px] px-3",
                locale === "en"
                  ? "text-content-weak mobile:text-body16Sb laptop:text-heading18Bd"
                  : "text-content-weakest  mobile:text-body16Rg laptop:text-heading18Rg"
              )}
              onClick={() => {
                router.replace("/en");
              }}
            >
              ENG
            </button>
          </div>
        </header>
      </div>
    </section>
  );
}
