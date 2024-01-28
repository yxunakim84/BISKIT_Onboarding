import { useState } from "react";
import Accordion from "../Accordion/Accordion";

const FAQ = [
  {
    question: "Q. 베타테스트 기간은 어떻게 되나요?",
    answer: "A. 2월 ?부터 3월 ?까지",
  },
  {
    question: "Q. 베타테스트 참여자로 선정되면 어떤 의무가 있나요?",
    answer: "A. 모임 생성 ~~ 참여 및 인증",
  },
  {
    question: "Q. 재학생만 가능한가요?",
    answer: "A. 아니요~~",
  },
  {
    question: "Q. 베타테스트 참여자로 선택되면 어떤 혜택이 있나요?",
    answer:
      "A. 베타테스트 참여자로 선정되면 우선적인 기능 액세스, 향상된 사용자 지원 및 우수한 피드백 제공 시 혜택을 받을 수 있습니다.",
  },
];

export default function Part8() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleClickFAQ = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <section className="flex w-full flex-col items-center bg-bg-elevation1 mobile:px-5 mobile:pb-10 mobile:pt-[60px] laptop:px-[40px] laptop:pb-[120px] laptop:pt-[100px]">
      <div className="flex max-w-[1220px] flex-col justify-center mobile:gap-y-5 laptop:gap-y-[56px]">
        <div className="text-content-default mobile:text-heading24Bd laptop:text-title48Bd">FAQ</div>
        <ul className="flex flex-col">
          {FAQ.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              description={faq.answer}
              isOpen={selectedIndex === index}
              onClickAccordion={() => handleClickFAQ(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
