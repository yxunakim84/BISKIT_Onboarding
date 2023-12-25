import React, { MutableRefObject, lazy } from "react";
import Icon from "../Icon";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import colors from "@/theme/colors";
import ReviewCard from "../ReviewCard";

const reviews: {
  ko_description: string;
  en_description: string;
  label: string;
}[] = [
  {
    ko_description:
      "옛날에 이런 서비스가 있었으면 좋았을텐데 이제라도 생겨서 외국인 친구들과 많은 소통, 교류가 이루어지면 좋겠어요.",
    en_description:
      "I wish there was a service like this a long time ago, but I'm glad it's here now. I hope there will be more communication and exchange with foreign friends.",
    label: "건국대학교 재학생 A",
  },
  {
    ko_description:
      "교내 외국인 학생들과 교류하고 싶어도 Buddy 프로그램 외에 방법이 없었는데 재학생들에게 좋은 기회가 될 것 같아요!",
    en_description:
      "I've never had a way to interact with foreign students on campus other than the Buddy program, and I think this will be a great opportunity for current students!",
    label: "고려대학교 재학생 B",
  },
  {
    ko_description:
      "외국인 친구를 만들 수 있는 기회가 없어서 있으면 너무 좋을 것 같아요!",
    en_description:
      "I don't have the opportunity to make foreign friends, so this would be great!",
    label: "숙명여자대학교 재학생 C",
  },
  {
    ko_description:
      "옛날에 이런 서비스가 있었으면 좋았을텐데 이제라도 생겨서 외국인 친구들과 많은 소통, 교류가 이루어지면 좋겠어요.",
    en_description:
      "I wanted not only the language, but also the socialization, the experience with foreign friends, and the experience, and I think I can do that here.",
    label: "경희대학교 재학생 D",
  },
  {
    ko_description:
      "내가 원할 때 마다 원하는 한국인 친구를 만날 수 있는 기회가 많아져서 좋아질 것 같아요.",
    en_description:
      "I think it will be great to have more opportunities to meet Korean friends whenever I want.",
    label: "이화여자대학교 재학생 E",
  },
  {
    ko_description:
      "외국인 학생들의 학교 적응에도 도움이 될 것이고 한국 학생들에게도 큰 도움이 될 것 같아요!",
    en_description:
      "I think it will help foreign students adjust to school, and I think it will help Korean students too!",
    label: "서울대학교 재학생 F",
  },
];

export default function Part6() {
  const animatedItem: Record<
    string,
    {
      ref: MutableRefObject<HTMLDivElement | null>;
      style: { opacity: number; transform: string | undefined };
    }
  > = {
    "0": useScrollFadeIn(DirectionType.up, 1, 1, 0.6),
    "1": useScrollFadeIn(DirectionType.up, 1, 1.3, 0.6),
    "2": useScrollFadeIn(DirectionType.up, 1, 1.6, 0.6),
    "3": useScrollFadeIn(DirectionType.up, 1, 1.9, 0.6),
    "4": useScrollFadeIn(DirectionType.up, 1, 2.1, 0.6),
    "5": useScrollFadeIn(DirectionType.up, 1, 2.4, 0.6),
    "6": useScrollFadeIn(DirectionType.up, 1, 1, 0.5),
  };
  return (
    <section className="mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="max-w-[1220px] w-full flex flex-col laptop:gap-y-[56px] mobile:gap-y-5 justify-between">
        <div
          className="laptop:text-title48Bd mobile:text-heading24Bd mobile:text-center desktop:text-start text-content-default"
          {...animatedItem[6]}
        >
          BISKIT을 먼저 만나본 사람들
        </div>
        <ul className="grid mobile:grid-cols-1 mobile:gap-y-4 laptop:grid-cols-3 laptop:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              description={review.ko_description}
              label={review.label}
              key={review.label}
              animation={animatedItem[index]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
