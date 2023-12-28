import React from "react";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import colors from "@/theme/colors";
import Link from "next/link";
import { DeviceType } from "@/types/device";
interface Part1Props {
  device: DeviceType;
}

export default function Part7({ device }: Part1Props) {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.4, 0.7),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.8, 0.7),
    2: useScrollFadeIn(DirectionType.up, 1.3, 1, 0.7),
  };
  return (
    <section className="mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:pt-[100px] laptop:pb-[120px] laptop:px-[40px] flex-col items-center bg-bg-elevation2 flex">
      <div className="max-w-[1220px] w-full flex flex-col mobile:gap-y-8 laptop:gap-y-[64px] items-center justify-between">
        <div>
          <div className="flex flex-col mobile:gap-y-5 laptop:gap-y-10 items-center">
            <div
              className="bg-[#0C1142] laptop:w-[88px] laptop:h-[88px] mobile:w-[64px] mobile:h-[64px] rounded-[22px] flex flex-col items-center justify-center"
              {...animatedItem[0]}
            >
              <Icon
                name="BISKIT_SYMBOL"
                color={colors.bg.primary}
                className="mobile:w-[34px] mobile:h-[30px] laptop:w-[64px] laptop:h-[37px]"
              />
            </div>
            <div
              className="mobile:text-heading24Bd laptop:text-title48Bd text-content-default text-center"
              {...animatedItem[1]}
            >
              글로벌한 대학생활,
              <br />
              BISKIT에서 시작해 보세요
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center" {...animatedItem[2]}>
          {device !== "Android" && (
            <Link
              href="https://apps.apple.com/kr/app/biskit/id6467542471"
              className="mobile:w-fit laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb"
            >
              <Icon name="Apple" width={24} height={24} />
              <span className="px-1">App Store</span>
            </Link>
          )}
          {device !== "iOS" && (
            <Link
              href="https://play.google.com/store/apps/details?id=com.teambiskit.biskit&pli=1"
              className="mobile:w-fit laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb"
            >
              <Icon name="Google" width={24} height={24} />
              <span className="px-1">Google Play</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
