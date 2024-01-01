import { PageData } from "@/contexts/locale.context/locale.context";
import useLocale from "@/hooks/useLocale";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";

export default function Part3() {
  const { dict } = useLocale() as { dict: PageData };

  const animatedItem = {
    0: useScrollFadeIn(DirectionType.right, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.right, 1.5, 0.4, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
  };

  return (
    <section className="w-full mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex mobile:flex-col desktop:flex-row-reverse items-center mobile:gap-y-[40px] laptop:gap-y-[64px] desktop:justify-between">
        <div className="flex flex-col laptop:gap-y-6 mobile:gap-y-3 desktop:pl-8 desktop:text-end mobile:text-center">
          <div className="flex flex-col laptop:gap-y-3 mobile:gap-y-1 desktop:items-end laptop:text-title48Bd mobile:text-heading24Bd">
            <div
              className="text-content-placeholder desktop:max-w-[290px]"
              {...animatedItem[2]}
            >
              {dict.page3.title}
            </div>
            <div className="text-content-default" {...animatedItem[3]}>
              {dict.page3.subTitle}
            </div>
          </div>
          <p className="whitespace-pre-wrap laptop:text-heading24Md mobile:text-body16Rg text-content-weaker animate-fadeIn">
            {dict.page3.description}
          </p>
        </div>
        <div
          className="relative mobile:aspect-[3/2] mobile:w-full mobile_m:w-[335px] mobile_m:h-[252px] laptop:w-[576px] laptop:h-[435px]"
          {...animatedItem[0]}
        >
          <Image
            src="/assets/image/screen/lang_card.png"
            alt=""
            fill
            unoptimized
            className="object-contain"
          />
        </div>
        {/* <div className="relative min-[400px]:w-full">
          <div
            className="relative mobile:w-[80%] mobile:aspect-square laptop:w-[416px] laptop:h-[435px]"
            {...animatedItem[0]}
          >
            <Image
              src="/assets/image/screen/level_graph.png"
              alt=""
              fill
              unoptimized
            />
            {!isMobile && (
              <div
                // className="w-[256px] h-[261px]"
                className="absolute laptop:-right-36 laptop:bottom-24 mobile:right-0 mobile:bottom-16 laptop:w-[256px] laptop:h-[261px] mobile:w-[148px] mobile:h-[151px]"
                {...animatedItem[1]}
              >
                <Image
                  src="/assets/image/screen/level.png"
                  alt=""
                  fill
                  unoptimized
                />
              </div>
            )}
          </div>
          {isMobile && (
            <div
              // className="w-[256px] h-[261px]"
              className="absolute laptop:-right-36 laptop:bottom-24 mobile:right-0 mobile:bottom-16 laptop:w-[256px] laptop:h-[261px] mobile:w-[148px] mobile:h-[151px]"
              {...animatedItem[1]}
            >
              <Image
                src="/assets/image/screen/level.png"
                alt=""
                fill
                unoptimized
              />
            </div>
          )}
        </div> */}
      </div>
    </section>
  );
}
