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
    <section className="w-full py-[100px] px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex items-center justify-between">
        <div className="pl-[40px] flex flex-col gap-y-6">
          <h4
            className="text-title48Bd text-content-default"
            {...animatedItem[0]}
          >
            학교 인증으로
            <br /> 더 안전하게
          </h4>
          <p
            className="text-caption18Sb text-content-weaker"
            {...animatedItem[1]}
          >
            신원을 알 수 없는 온라인 만남은 그만, <br />
            학교 인증된 진짜 우리학교 친구들과 함께해요
          </p>
        </div>
        <div className="w-[504px] h-[504px] bg-bg-elevation3 rounded-[32px] flex justify-center items-end">
          <div className="relative w-[380px] h-[442px]" {...animatedItem[2]}>
            <Image
              src="/assets/img/screen/verify_screen.png"
              alt="verification"
              fill
              unoptimized
            />
            <div
              className="absolute py-2 pl-3 pr-5 flex gap-x-[6px] bg-[#2F384E] rounded-[71.6px] -right-8 bottom-[241px]"
              {...animatedItem[3]}
            >
              <Icon
                name="Badge"
                width={24}
                height={24}
                color={colors.content.primaryOnInverse}
              />
              <span className="text-heading20Bd text-[#FEFEFE]">
                학교 인증 완료
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
