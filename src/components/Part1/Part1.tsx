"use client";

import React from "react";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Link from "next/link";
import { DeviceType } from "@/types/device";
import useLocale from "@/hooks/useLocale";
import { PageData } from "@/contexts/locale.context/locale.context";
import { Locale } from "@/types/locale";
import { useRouter } from "next/navigation";

interface Part1Props {
  device: DeviceType;
  windowWidth: number;
}

export function Part1({ device, windowWidth }: Part1Props) {
  const { locale, dict } = useLocale() as { locale: Locale; dict: PageData };
  const router = useRouter();

  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.1),
  };

  return (
    <section className="h-full w-full flex flex-col items-center bg-bg-elevation2">
      <div className="laptop:max-w-[1220px] mobile:max-w-full laptop:pt-[80px] mobile:pt-12 h-full px-5 justify-between mobile:gap-y-12 laptop:gap-y-[94px] flex flex-col items-center animate-fadeIn">
        <div className="flex flex-col laptop:gap-y-[48px] mobile:gap-y-6">
          <div className="flex flex-col text-center laptop:gap-y-6 mobile:gap-y-3 items-center">
            <h4 className="laptop:text-title48Bd mobile:text-heading24Bd whitespace-pre-wrap text-content-default text-center">
              {dict.page1.title}
            </h4>
            <p className="laptop:text-body24Sb mobile:text-body16Rg text-content-weaker mobile:px-12">
              {dict.page1.subTitle}
            </p>
          </div>
          <div className="flex gap-x-4 justify-center" {...animatedItem[0]}>
            {device !== "Android" && (
              <button
                onClick={() => {
                  router.push(
                    "https://apps.apple.com/kr/app/biskit/id6467542471"
                  );
                }}
                className="mobile:w-fit hover:bg-bg-inverse active:bg-bg-inverse transition-colors duration-300 laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb"
              >
                <Icon name="Apple" width={24} height={24} />
                <span className="px-1">App Store</span>
              </button>
            )}
            {device !== "iOS" && (
              <button
                onClick={() => {
                  router.push(
                    "https://play.google.com/store/apps/details?id=com.teambiskit.biskit&pli=1"
                  );
                }}
                className="mobile:w-fit hover:bg-bg-inverse active:bg-bg-inverse transition-colors duration-300 laptop:w-[180px] justify-center p-4 mobile:px-5 laptop:px-4 w-fit rounded-[12px] flex bg-bg-inverseWeak text-content-inverse text-caption18Sb"
              >
                <Icon name="Google" width={24} height={24} />
                <span className="px-1">Google Play</span>
              </button>
            )}
          </div>
        </div>
        <div
          className="mobile:w-[257px] mobile:h-[270px] bg-cover bg-no-repeat laptop:w-[808px] laptop:h-[776px] relative"
          {...animatedItem[1]}
          style={
            windowWidth < 600
              ? {
                  backgroundImage: `url(/assets/image/screen/home_screen_mobile_${locale}.png)`,
                }
              : {
                  backgroundImage: `url(/assets/image/screen/home_screen_laptop_${locale}.png)`,
                }
          }
        ></div>
      </div>
    </section>
  );
}
