import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import colors from "@/theme/colors";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";

export default function Part2() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1),
    1: useScrollFadeIn(DirectionType.up, 1.5, 0.4),
    2: useScrollFadeIn(DirectionType.left, 1.5, 0.1),
    3: useScrollFadeIn(DirectionType.left, 1.6, 0.1),
  };

  return (
    <section className="laptop:min-h-screen mobile:h-full w-full laptop:py-[100px] laptop:px-[40px] mobile:pt-[60px] mobile:pb-[40px] mobile:px-[20px] flex-col items-center bg-bg-elevation1 flex">
      <div className="laptop:max-w-[1220px] mobile:w-full flex desktop:flex-row mobile:flex-col items-center desktop:justify-between mobile:gap-y-[40px] laptop:gap-y-[64px]">
        <div className="flex desktop:text-start flex-col laptop:gap-y-6 mobile:gap-y-3">
          <h4
            className="laptop:text-title48Bd mobile:text-center desktop:text-start mobile:text-heading24Bd text-content-default"
            {...animatedItem[0]}
          >
            학교 인증으로
            <br /> 더 안전하게
          </h4>
          <p
            className="laptop:text-caption18Sb mobile:text-center desktop:text-start mobile:text-body16Rg text-content-weaker"
            {...animatedItem[1]}
          >
            신원을 알 수 없는 온라인 만남은 그만, <br />
            학교 인증된 진짜 우리학교 친구들과 함께해요
          </p>
        </div>
        <div className="max-[607px]:w-[504px] max-[607px]:h-[504px] mobile:aspect-square w-full bg-bg-elevation3 rounded-[32px] flex justify-center items-end">
          <div
            className="relative laptop:w-[380px] laptop:h-[442px] mobile:w-[300px] mobile:h-[350px]"
            {...animatedItem[2]}
          >
            <Image
              src="/assets/img/screen/verify_screen.png"
              alt="verification"
              fill
              unoptimized
            />
            <div
              className="absolute laptop:py-2 laptop:pl-3 laptop:pr-5 mobile:py-[5px] mobile:pl-2 mobile:pr-[13px] flex laptop:gap-x-[6px] mobile:gap-x-[4px] items-center bg-[#2F384E] rounded-[71.6px] -right-8 laptop:bottom-[241px] mobile:bottom-[216px]"
              {...animatedItem[3]}
            >
              <Icon
                name="Badge"
                color={colors.content.primaryOnInverse}
                className="mobile:w-4 mobile:h-4 laptop:w-6 laptop:h-6"
              />
              <span className="laptop:text-heading20Bd mobile:text-body14Sb text-[#FEFEFE]">
                학교 인증 완료
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
