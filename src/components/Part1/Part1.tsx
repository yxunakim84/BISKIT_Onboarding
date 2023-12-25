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
    <section className="min-h-screen flex flex-col w-full items-center bg-bg-elevation2 px-[40px]">
      <div className="max-w-[1220px] w-full flex flex-col">
        {/* content */}
        <section className="pt-[80px] h-full px-5 justify-between flex flex-col items-center animate-fadeIn">
          <div className="flex flex-col gap-y-[48px]">
            <div className="flex flex-col gap-y-6 items-center">
              <h4 className="text-title48Bd text-content-default text-center">
                공강시간에 우리학교
                <br />
                외국인 친구들과 맛집 가요!
              </h4>
              <p className="text-caption18Sb text-content-weaker">
                BISKIT에서 우리학교 다양한 국적의 친구들과 모여볼까요?
              </p>
            </div>
            <div className="flex gap-x-4 justify-center" {...animatedItem[0]}>
              <button className="p-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb">
                <Icon name="Apple" width={24} height={24} />
                <span className="px-1">App Store</span>
              </button>
              <button className="p-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb">
                <Icon name="Google" width={24} height={24} />
                <span className="px-1">Google Play</span>
              </button>
            </div>
          </div>
          <div className="w-[808px] h-[776px] relative" {...animatedItem[1]}>
            <Image
              src="/assets/img/screen/home_screen.png"
              alt="home"
              fill
              unoptimized
            />
          </div>
        </section>
      </div>
    </section>
  );
}
