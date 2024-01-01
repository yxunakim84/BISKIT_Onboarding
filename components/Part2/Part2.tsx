import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import colors from "../../theme/colors";
import useScrollFadeIn, { DirectionType } from "../../hooks/useScrollFadeIn";
import useLocale from "../../hooks/useLocale";
import { PageData } from "../../contexts/locale.context/locale.context";

export default function Part2() {
  const { dict } = useLocale() as { dict: PageData };

  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.5, 0.4),
    2: useScrollFadeIn(DirectionType.left, 1.5, 0.1),
    3: useScrollFadeIn(DirectionType.left, 1.6, 0.1),
  };

  return (
    <section className="laptop:min-h-screen mobile:h-full w-full laptop:py-[100px] laptop:px-[40px] mobile:pt-[60px] mobile:pb-[40px] mobile:px-[20px] flex-col items-center bg-bg-elevation1 flex">
      <div className="laptop:max-w-[1220px] mobile:w-full flex desktop:flex-row mobile:flex-col items-center desktop:justify-between mobile:gap-y-[40px] laptop:gap-y-[64px]">
        <div className="flex desktop:text-start flex-col laptop:gap-y-6 mobile:gap-y-3">
          <h4
            className="whitespace-pre-wrap laptop:text-title48Bd mobile:text-center desktop:text-start mobile:text-heading24Bd text-content-default"
            {...animatedItem[0]}
          >
            {dict.page2.title}
          </h4>
          <p
            className="whitespace-pre-wrap laptop:text-caption18Sb mobile:text-center desktop:text-start mobile:text-body16Rg text-content-weaker"
            {...animatedItem[1]}
          >
            {dict.page2.subTitle}
          </p>
        </div>
        <div className="laptop:w-[504px] laptop:h-[504px] mobile:aspect-square mobile:w-full mobile_m:w-[335px] mobile_m:h-[335px] w-full bg-bg-elevation3 flex justify-center items-end laptop:rounded-[32px] mobile:rounded-[20px]">
          <div
            className="relative laptop:w-[380px] laptop:h-[442px] mobile:aspect-square mobile:w-full mobile_m:w-[275px] mobile_m:h-[310px] "
            {...animatedItem[2]}
          >
            <Image
              src="/verify_screen.png"
              alt="verification"
              fill
              unoptimized
              className="object-contain mobile:pt-4 mobile_m:pt-0"
            />
            <div
              className="absolute laptop:py-2 laptop:pl-3 laptop:pr-5 mobile:py-[5px] mobile:pl-2 mobile:pr-[13px] flex laptop:gap-x-[6px] mobile:gap-x-[4px] items-center bg-[#2F384E] rounded-[71.6px] -right-8 mobile:-right-4 laptop:bottom-[241px] mobile:bottom-[156px]"
              {...animatedItem[3]}
            >
              <Icon
                name="Badge"
                color={colors.content.primaryOnInverse}
                className="mobile:w-4 mobile:h-4 laptop:w-6 laptop:h-6"
              />
              <span className="laptop:text-heading20Bd mobile:text-body14Sb text-[#FEFEFE]">
                {dict.page2.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
