import { PageData } from "@/contexts/locale.context/locale.context";
import useLocale from "@/hooks/useLocale";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import { MutableRefObject } from "react";
import ReviewCard from "../ReviewCard";

const reviews: {
  ko_description: string;
  en_description: string;
  label: string;
}[] = [
  {
    ko_description:
      "이런 서비스를 항상 원해 왔는데 앞으로 많이 이용할 것 같아요! 외국인 친구들과 교류가 많이 이루어지면 좋겠어요.",
    en_description:
      "I've always wanted a service like this, and I think I'll use it frequently! I'm looking forward to having meaningful exchanges with both foreign and Korean friends.",
    label: "고려대학교 재학생 A",
  },
  {
    ko_description:
      "교내 외국인 학생들과 교류하고 싶어도 Buddy 프로그램 외에 방법이 없었는데 재학생들에게 좋은 기회가 될 것 같아요!",
    en_description:
      "I've never had a way to interact with foreign students on campus other than the Buddy program, so I think this will be a fantastic opportunity for current students!",
    label: "경희대학교 재학생 B",
  },
  {
    ko_description: "외국인 친구를 만들 수 있는 기회가 마땅히 없었는데 있으면 너무 좋을 것 같아요!",
    en_description:
      "Before, I didn't have many opportunities to make foreign friends, so this app would be perfect for me!",
    label: "숙명여자대학교 재학생 C",
  },
  {
    ko_description:
      "언어교환 뿐만 아니라 외국인 친구와의 친목이나 교류를 원했는데 여기서 할 수 있을 것 같아서 기대됩니다.",
    en_description:
      "I'm looking forward to not only language exchange but also socializing and making friends with people from other countries. I believe I can achieve that with this app.",
    label: "단국대학교 재학생 D",
  },
  {
    ko_description:
      "한국인 친구를 만나고 싶어도 방법이 많지 않았는데, 내가 원하는 주제와 언어로 다른 친구들과 교류할 수 있는 것 같아서 많은 도움이 될 것 같아요.",
    en_description:
      "I wanted to make Korean friends, but there weren't many options. Now, with this app, I can create and join meetups based on topics and languages I'm interested in, which is really helpful.",
    label: "중앙대학교 교환학생 E",
  },
  {
    ko_description: "이 앱으로 언어 교환이나 스터디도 많이 하고, 공강시간마다 자주 만나고 놀러다닐 것 같아요 :)",
    en_description:
      "I plan to join many language exchange and study meetups with this app, and spend time hanging out between classes :)",
    label: "서울대학교 재학생 F",
  },
];

export default function Part6() {
  const { dict, locale } = useLocale() as {
    dict: PageData;
    locale: "ko" | "en";
  };

  const animatedItem: Record<
    string,
    {
      ref: MutableRefObject<HTMLDivElement | null>;
      style: { opacity: number; transform: string | undefined };
    }
  > = {
    "0": useScrollFadeIn(DirectionType.up, 1, 0.1),
    "1": useScrollFadeIn(DirectionType.up, 1, 0.2),
    "2": useScrollFadeIn(DirectionType.up, 1, 0.3),
    "3": useScrollFadeIn(DirectionType.up, 1, 0.4),
    "4": useScrollFadeIn(DirectionType.up, 1, 0.5),
    "5": useScrollFadeIn(DirectionType.up, 1, 0.6),
    "6": useScrollFadeIn(DirectionType.up, 1, 0.4),
  };
  return (
    <section className="flex flex-col items-center bg-bg-elevation1 mobile:px-5 mobile:pb-[40px] mobile:pt-[60px] laptop:px-[40px] laptop:py-[100px]">
      <div className="flex w-full max-w-[1220px] flex-col justify-between mobile:gap-y-5 laptop:gap-y-[56px]">
        <div
          className="text-content-default mobile:text-center mobile:text-heading24Bd laptop:text-title48Bd desktop:text-start"
          {...animatedItem[6]}
        >
          {dict.page6.title}
        </div>
        <ul className="grid mobile:grid-cols-1 mobile:gap-y-4 laptop:grid-cols-3 laptop:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              description={locale === "ko" ? review.ko_description : review.en_description}
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
