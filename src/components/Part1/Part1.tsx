import React from "react";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Link from "next/link";
import { DeviceType } from "@/types/device";

interface Part1Props {
  device: DeviceType;
}

export function Part1({ device }: Part1Props) {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.1),
  };

  const windowWidth = window.innerWidth;

  return (
    <section className="h-full w-full flex flex-col items-center bg-bg-elevation2">
      <div className="laptop:max-w-[1220px] mobile:max-w-full laptop:pt-[80px] mobile:pt-12 h-full px-5 justify-between mobile:gap-y-12 laptop:gap-y-[94px] flex flex-col items-center animate-fadeIn">
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
        <div
          className="mobile:w-[257px] mobile:h-[270px] bg-cover bg-no-repeat laptop:w-[808px] laptop:h-[776px] relative"
          {...animatedItem[1]}
          style={
            windowWidth < 600
              ? {
                  backgroundImage: `url(/assets/img/screen/home_screen2.png)`,
                }
              : {
                  backgroundImage: `url(/assets/img/screen/home_screen_laptop.png)`,
                }
          }
        ></div>
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
