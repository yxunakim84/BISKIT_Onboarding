import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import Image from "next/image";
import React from "react";
import { IconName } from "../Icon/Icon";
import CategoryItem from "../CategoryItem";
import useLocale from "@/hooks/useLocale";
import { PageData } from "@/contexts/locale.context/locale.context";
import { Locale } from "@/types/locale";

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

interface Part4Props {
  windowWidth: number;
}
export default function Part4({ windowWidth }: Part4Props) {
  const { locale, dict } = useLocale() as {
    locale: Locale;
    dict: PageData;
  };

  const animatedItem = {
    0: useScrollFadeIn(DirectionType.up, 1.2, 0.1, 0.5),
    1: useScrollFadeIn(DirectionType.up, 1.3, 0.1),
    2: useScrollFadeIn(DirectionType.up, 1.8, 0.3),
  };

  return (
    <section className="mobile:pt-[60px] mobile:pb-[40px] mobile:px-5 laptop:py-[100px] laptop:px-[40px] flex-col items-center bg-bg-elevation1 flex">
      <div className="laptop:max-w-[1220px] mobile:gap-y-12 w-full flex mobile:flex-col desktop:flex-row items-center desktop:justify-between">
        <div className="desktop:pr-8 flex w-full flex-col laptop:gap-y-12 mobile:gap-y-8">
          <div className="flex flex-col mobile:items-center mobile:text-center desktop:text-start desktop:items-start mobile:gap-y-3 laptop:gap-y-6 animate-fadeIn">
            <div className="whitespace-pre-wrap text-content-default laptop:text-title48Bd mobile:text-heading24Bd">
              {dict.page4.title}
            </div>
            <div className="whitespace-pre-wrap laptop:text-heading24Md mobile:text-body16Rg text-content-weaker">
              {dict.page4.subTitle}
            </div>
          </div>

          {windowWidth < 600 ? (
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28px,_black_calc(100%-28px),transparent_100%)] animate-fadeIn"
              {...animatedItem[0]}
            >
              <ul className="animate-infiniteScroll flex items-center justify-center md:justify-start">
                {category_list.map((category) => (
                  <CategoryItem
                    key={category.ko_label}
                    icon={category.icon}
                    label={
                      locale === "ko" ? category.ko_label : category.en_label
                    }
                  />
                ))}
              </ul>
              <ul
                className="flex items-center justify-center md:justify-start animate-infiniteScroll"
                aria-hidden="true"
              >
                {category_list.map((category) => (
                  <CategoryItem
                    key={category.ko_label}
                    icon={category.icon}
                    label={
                      locale === "ko" ? category.ko_label : category.en_label
                    }
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div
              className="flex mobile:justify-center desktop:justify-start mobile:gap-x-6 laptop:gap-x-0 mobile:w-full"
              {...animatedItem[0]}
            >
              {category_list.map((category) => (
                <CategoryItem
                  key={category.ko_label}
                  icon={category.icon}
                  label={
                    locale === "ko" ? category.ko_label : category.en_label
                  }
                />
              ))}
            </div>
          )}
        </div>

        <div
          className="relative shrink-0 aspect-square mobile:w-full mobile:h-full mobile_m:w-[335px] mobile_m:h-[335px] laptop:w-[504px] laptop:h-[504px] bg-bg-inverseWeak flex flex-col items-center justify-center laptop:rounded-[32px] mobile:rounded-[20px]"
          {...animatedItem[1]}
        >
          <div className="relative mobile:aspect-square mobile:w-full mobile_m:w-[206px] mobile_m:h-[446px] laptop:w-[311px] laptop:h-[672px]">
            <Image
              src={`/assets/image/screen/meetup_list_${locale}.png`}
              alt=""
              fill
              unoptimized
              className="object-contain mobile:pt-5 mobile_m:pt-8"
            />
          </div>
          <div
            className="absolute laptop:w-[377px] laptop:h-[224px] mobile_m:w-[250px] mobile_m:h-[150px] mobile:aspect-square mobile:w-full mobile_m:shadow-shadow-3"
            {...animatedItem[2]}
          >
            <Image
              src={`/assets/image/screen/meetup_card_${locale}.png`}
              alt=""
              fill
              unoptimized
              className="mobile:object-contain mobile:px-4 mobile_m:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
