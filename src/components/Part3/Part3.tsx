import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";

export default function Part3() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.right, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.right, 1.5, 0.4, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
  };

  return (
    <section className="w-full mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex mobile:flex-col desktop:flex-row-reverse items-center mobile:gap-y-[40px] laptop:gap-y-[64px] desktop:justify-between">
        <div className="flex flex-col laptop:gap-y-6 mobile:gap-y-3 pl-8 desktop:text-end mobile:text-center">
          <div className="flex flex-col laptop:gap-y-3 mobile:gap-y-1 desktop:items-end laptop:text-title48Bd mobile:text-heading24Bd">
            <div
              className="text-content-placeholder desktop:max-w-[290px]"
              {...animatedItem[2]}
            >
              영어 못하는데 괜찮을까..?
            </div>
            <div className="text-content-default" {...animatedItem[3]}>
              걱정마세요!
            </div>
          </div>
          <p className="laptop:text-heading24Md mobile:text-body16Rg text-content-weaker animate-fadeIn">
            서툴게 말해도 찰떡같이 알아듣는
            <br />
            외국인 친구들과 부담없이 대화하고
            <br />
            언어 실력도 늘려보세요
          </p>
        </div>
        <div
          className="relative mobile:w-[335px] mobile:h-[252px] laptop:w-[576px] laptop:h-[435px]"
          {...animatedItem[0]}
        >
          <Image
            src="/assets/img/screen/lang_card.png"
            alt=""
            fill
            unoptimized
          />
        </div>
        {/* <div className="relative min-[400px]:w-full">
          <div
            className="relative mobile:w-[80%] mobile:aspect-square laptop:w-[416px] laptop:h-[435px]"
            {...animatedItem[0]}
          >
            <Image
              src="/assets/img/screen/level_graph.png"
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
                  src="/assets/img/screen/level.png"
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
                src="/assets/img/screen/level.png"
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
