import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";

export default function Part5() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.3, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.3, 0.5),
  };
  return (
    <section className="mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="laptop:max-w-[1220px] mobile:gap-y-12 w-full flex mobile:flex-col desktop:flex-row items-center desktop:justify-between">
        <div className="desktop:pl-8 flex w-full flex-col laptop:gap-y-12 mobile:gap-y-8">
          <div className="flex flex-col mobile:items-center mobile:text-center desktop:text-start desktop:items-start mobile:gap-y-3 laptop:gap-y-6">
            <div className="text-content-default laptop:text-title48Bd mobile:text-heading24Bd animate-fadeIn">
              언제 어디서든
              <br />
              쉽고 편리한 모임
            </div>
            <div
              className="laptop:text-heading24Md mobile:text-body16Rg text-content-weaker"
              {...animatedItem[1]}
            >
              학교 근처 나만의 장소가 있나요?
              <br />
              공강시간에 만나고 싶나요?
              <br />
              내가 편한 시간과 장소에서 만나보세요.
            </div>
          </div>
        </div>
        <div
          className="relative mobile:aspect-square mobile:w-full mobile:h-full mobile_m:w-[335px] mobile_m:h-[335px] laptop:w-[504px] laptop:h-[504px] flex flex-col items-center"
          {...animatedItem[2]}
        >
          <div className="relative mobile:aspect-square mobile:w-full mobile:h-full mobile_m:w-[335px] mobile_m:h-[335px] laptop:w-[504px] laptop:h-[504px]">
            <Image
              src="/assets/img/screen/meetup_card_2.png"
              alt=""
              fill
              unoptimized
              className="object-contain laptop:rounded-[32px] mobile:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
