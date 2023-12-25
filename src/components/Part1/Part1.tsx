import Image from "next/image";
import React from "react";
import colors from "@/theme/colors";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";

export function Part1() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.1),
  };
  return (
    <section className="laptop:min-h-screen mobile:h-full w-full flex flex-col items-center bg-bg-elevation2">
      <div className="laptop:max-w-[1220px] mobile:max-w-full pt-[80px] h-full px-5 justify-between flex flex-col items-center animate-fadeIn">
        <div className="flex flex-col laptop:gap-y-[48px] mobile:gap-y-6">
          <div className="flex flex-col text-center laptop:gap-y-6 mobile:gap-y-3 items-center">
            <h4 className="laptop:text-title48Bd mobile:text-heading24Bd text-content-default text-center">
              공강시간에 우리학교
              <br />
              외국인 친구들이랑 맛집 가요!
            </h4>
            <p className="laptop:text-caption18Sb mobile:text-body16Rg text-content-weaker mobile:px-12">
              BISKIT에서 우리학교 다양한 국적의 친구들과 모여볼까요?
            </p>
          </div>
          <div className="flex gap-x-4 justify-center" {...animatedItem[0]}>
            <button className="mobile:w-fit laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb">
              <Icon name="Apple" width={24} height={24} />
              <span className="px-1">App Store</span>
            </button>
          </div>
        </div>
        <div
          className="mobile:w-[290px] mobile:h-[520px] laptop:w-[431px] laptop:h-[776px] relative"
          {...animatedItem[1]}
        >
          <Image
            src="/assets/img/screen/home_screen.png"
            alt="home"
            fill
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <button className="mobile:w-fit laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb">
  <Icon name="Google" width={24} height={24} />
  <span className="px-1">Google Play</span>
</button> */
}
