import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";

export default function Part3() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.right, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.right, 1.5, 0.4, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
  };
  return (
    <section className="w-full py-[100px] px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex items-center justify-between">
        <div className="relative w-[416px] h-[435px]" {...animatedItem[0]}>
          <Image
            src="/assets/img/screen/level_graph.png"
            alt=""
            fill
            unoptimized
          />
          <div
            className="absolute -right-36 bottom-24 w-[256px] h-[261px]"
            {...animatedItem[1]}
          >
            <Image src="/assets/img/screen/level.png" alt="" fill unoptimized />
          </div>
        </div>
        <div className="flex flex-col gap-y-6 pl-8 text-end">
          <div className="flex flex-col gap-y-3 text-title48Bd">
            <div className="text-content-placeholder" {...animatedItem[2]}>
              영어 못하는데 <br />
              괜찮을까..?
            </div>
            <div className="text-content-default" {...animatedItem[3]}>
              걱정마세요!
            </div>
          </div>
          <p className="text-heading24Md text-content-weaker animate-fadeIn">
            서툴게 말해도 찰떡같이 알아듣는
            <br />
            외국인 친구들과 부담없이 대화하고
            <br />
            언어 실력도 늘려보세요
          </p>
        </div>
      </div>
    </section>
  );
}
