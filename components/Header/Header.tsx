import React from "react";
import Icon from "../Icon";
import colors from "../../theme/colors";
import { useRouter } from "next/navigation";
import useLocale from "../../hooks/useLocale";
import { cx } from "class-variance-authority";

export default function Header() {
  const router = useRouter();
  const { locale } = useLocale();

  return (
    <section className="w-full flex flex-col items-center bg-bg-elevation2 mobile:border-b mobile:border-border-default laptop:border-none">
      <header className="max-w-[1220px] w-full px-5 flex justify-between mobile:h-[60px] laptop:h-[72px] items-center">
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
    </section>
  );
}
