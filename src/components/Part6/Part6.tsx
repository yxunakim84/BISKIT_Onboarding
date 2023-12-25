import React from "react";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import colors from "@/theme/colors";

export default function Part6() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.4, 0.7),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.8, 0.7),
    2: useScrollFadeIn(DirectionType.up, 1.3, 1, 0.7),
  };
  return (
    <section className="w-full py-[120px] px-[40px] flex-col items-center bg-bg-elevation2 flex">
      <div className="max-w-[1220px] w-full flex flex-col gap-y-[64px] items-center justify-between">
        <div>
          <div className="flex flex-col gap-y-[40px] items-center">
            <div
              className="bg-[#0C1142] w-[88px] h-[88px] rounded-[22px] flex flex-col items-center justify-center"
              {...animatedItem[0]}
            >
              <Icon
                name="BISKIT_SYMBOL"
                width={47}
                height={37}
                color={colors.bg.primary}
              />
            </div>
            <div
              className="text-title48Bd text-content-default text-center"
              {...animatedItem[1]}
            >
              글로벌한 대학생활,
              <br />
              BISKIT에서 시작해 보세요
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center" {...animatedItem[2]}>
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
    </section>
  );
}
