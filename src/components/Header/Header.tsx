import React from "react";
import Icon from "../Icon";
import colors from "@/theme/colors";

export default function Header() {
  return (
    <section className="w-full flex flex-col items-center bg-bg-elevation2">
      <header className="max-w-[1220px] w-full px-5 flex justify-between h-[72px] items-center">
        <Icon
          name="Logo"
          width={51}
          height={24}
          color={colors.content.weaker}
        />
        <div className="flex h-fit items-center">
          <button className="py-[10px] px-3 text-content-weak text-heading18Bd">
            KOR
          </button>
          <span className="w-[1px] h-6 bg-border-default mx-2" />
          <button className="py-[10px] px-3 text-content-weakest text-heading18Rg">
            ENG
          </button>
        </div>
      </header>
    </section>
  );
}
