"use client";

import { PageData } from "@/contexts/locale.context/locale.context";
import useLocale from "@/hooks/useLocale";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import * as gtag from "@/lib/gtag";
import { DeviceType } from "@/types/device";
import { Locale } from "@/types/locale";
import { useRouter } from "next/navigation";
import Icon from "../Icon";

interface Part1Props {
  device: DeviceType;
  windowWidth: number;
}

const osVariant = {
  ios: {
    link: "https://apps.apple.com/kr/app/biskit/id6467542471",
    eventLabel: "click_ios_appstore",
    value: 1,
  },
  android: {
    link: "https://play.google.com/store/apps/details?id=com.teambiskit.biskit&pli=1",
    eventLabel: "click_android_playstore",
    value: 2,
  },
};

export function Part1({ device, windowWidth }: Part1Props) {
  const { locale, dict } = useLocale() as { locale: Locale; dict: PageData };
  const router = useRouter();

  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.1),
  };

  const handleClickButton = (osType: "ios" | "android") => {
    // GA event
    gtag.event(osVariant[osType].eventLabel as "click_ios_appstore" | "click_android_playstore", {
      event_category: "button_interaction",
      event_label: osVariant[osType].eventLabel,
      value: osVariant[osType].value,
    });

    router.push(osVariant[osType].link);
  };

  return (
    <section className="flex h-full w-full flex-col items-center bg-bg-elevation2">
      <div className="flex h-full animate-fadeIn flex-col items-center justify-between px-5 mobile:max-w-full mobile:gap-y-12 mobile:pt-12 laptop:max-w-[1220px] laptop:gap-y-[94px] laptop:pt-[80px]">
        <div className="flex flex-col mobile:gap-y-6 laptop:gap-y-[48px]">
          <div className="flex flex-col items-center text-center mobile:gap-y-3 laptop:gap-y-6">
            <h4 className="whitespace-pre-wrap text-center text-content-default mobile:text-heading24Bd laptop:text-title48Bd">
              {dict.page1.title}
            </h4>
            <p className="text-content-weaker mobile:px-12 mobile:text-body16Rg laptop:text-body24Sb">
              {dict.page1.subTitle}
            </p>
          </div>
          <div className="flex justify-center gap-x-4" {...animatedItem[0]}>
            {device !== "Android" && (
              <button
                onClick={() => handleClickButton("ios")}
                className="flex w-fit justify-center rounded-[12px] bg-bg-inverseWeak p-4 text-caption18Sb text-content-inverse transition-colors duration-300 hover:bg-bg-inverse active:bg-bg-inverse mobile:w-fit mobile:px-5 laptop:w-[180px] laptop:px-4"
              >
                <Icon name="Apple" width={24} height={24} />
                <span className="px-1">App Store</span>
              </button>
            )}
            {device !== "iOS" && (
              <button
                onClick={() => handleClickButton("android")}
                className="flex w-fit justify-center rounded-[12px] bg-bg-inverseWeak p-4 text-caption18Sb text-content-inverse transition-colors duration-300 hover:bg-bg-inverse active:bg-bg-inverse mobile:w-fit mobile:px-5 laptop:w-[180px] laptop:px-4"
              >
                <Icon name="Google" width={24} height={24} />
                <span className="px-1">Google Play</span>
              </button>
            )}
          </div>
        </div>
        <div
          className="relative bg-cover bg-no-repeat mobile:h-[270px] mobile:w-[257px] laptop:h-[776px] laptop:w-[808px]"
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
