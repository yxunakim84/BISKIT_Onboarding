import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";
import { IconName } from "../Icon/Icon";
import CategoryItem from "../CategoryItem";

const category_list: { ko_label: string; en_label: string; icon: IconName }[] =
  [
    {
      ko_label: "푸드",
      en_label: "food",
      icon: "Food",
    },
    {
      ko_label: "언어교환",
      en_label: "language",
      icon: "Language",
    },
    {
      ko_label: "액티비티",
      en_label: "activity",
      icon: "Activity",
    },
    {
      ko_label: "스포츠",
      en_label: "sports",
      icon: "Sports",
    },
    {
      ko_label: "스터디",
      en_label: "study",
      icon: "Study",
    },
    {
      ko_label: "문화·예술",
      en_label: "culture",
      icon: "Culture",
    },
    {
      ko_label: "취미",
      en_label: "hobby",
      icon: "Hobby",
    },
  ];

export default function Part4() {
  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.up, 1.6, 0.1, 0.5),
    2: useScrollFadeIn(DirectionType.up, 1.3, 0.1, 0.5),
    3: useScrollFadeIn(DirectionType.up, 1.6, 0.3, 0.5),
  };
  return (
    <section className="w-full py-[100px] px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex items-center justify-between">
        <div className="pr-8 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-6">
            <div className="text-content-default text-title48Bd animate-fadeIn">
              내 취향에
              <br />딱 맞는 모임
            </div>
            <div
              className="text-heading24Md text-content-weaker"
              {...animatedItem[1]}
            >
              밥약부터 취미까지
              <br />내 취향에 맞는 모임을 찾아보세요
            </div>
          </div>
          <div className="flex" {...animatedItem[0]}>
            {category_list.map((category) => (
              <CategoryItem
                icon={category.icon}
                label={category.ko_label}
                key={category.ko_label}
              />
            ))}
          </div>
        </div>
        <div
          className="relative shrink-0 w-[504px] h-[504px] bg-bg-inverseWeak flex flex-col items-center rounded-[32px]"
          {...animatedItem[2]}
        >
          <Image
            src="/assets/img/screen/meetup_list.png"
            alt=""
            width={311}
            height={672}
            unoptimized
          />
          <div
            className="w-[377px] h-[224px] absolute top-10 shadow-shadow-3"
            {...animatedItem[3]}
          >
            <Image
              src="/assets/img/screen/meetup.png"
              alt=""
              fill
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
