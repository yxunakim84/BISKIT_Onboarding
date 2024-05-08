import colors from "@/theme/colors";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";

interface AccordionProps {
  title: string;
  description: string;
  isOpen?: boolean;
  onClickAccordion?: (() => void) | undefined;
}

export default function Accordion({
  title,
  description,
  isOpen: passedIsOpen = false,
  onClickAccordion: passedHandleClickAccordion,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(passedIsOpen);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(passedIsOpen);
  }, [passedIsOpen]);
  return (
    <div className="flex flex-col border-b border-border-strong">
      {/* title */}
      <button
        className="flex w-full justify-between gap-x-4 text-start text-content-default mobile:py-4 mobile:text-body16Sb laptop:py-5 laptop:text-heading24Bd"
        onClick={() => {
          if (passedHandleClickAccordion) passedHandleClickAccordion();
          else {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <div>{title}</div>
        <Icon
          name="Chevron"
          // width={32}
          // height={32}
          rotate={isOpen ? 180 : 0}
          color={colors.content.default}
          className="shrink-0 transform duration-300 mobile:h-6 mobile:w-6 laptop:h-8 laptop:w-8"
        />
        <Icon
          name="Chevron"
          rotate={isOpen ? 180 : 0}
          color={colors.content.default}
          className="shrink-0 transform duration-300 mobile:h-6 mobile:w-6 laptop:h-8 laptop:w-8"
        />
      </button>
      {/* description */}
      <div
        className="overflow-hidden text-content-weaker transition-all duration-300"
        style={{
          maxHeight: isOpen ? descriptionRef.current?.offsetHeight : 0,
        }}
      >
        <div
          ref={descriptionRef}
          className="mobile:pb-8 mobile:pt-1 mobile:text-body16Rg laptop:pb-10 laptop:pt-2 laptop:text-heading24Md"
        >
          {description}
        </div>
      </div>
    </div>
  );
}
