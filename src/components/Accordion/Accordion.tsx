import { useEffect, useRef, useState } from "react";

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
        className="w-full text-start text-content-default mobile:py-4 mobile:text-body16Sb laptop:py-5 laptop:text-heading24Bd"
        onClick={() => {
          if (passedHandleClickAccordion) passedHandleClickAccordion();
          else {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <div>{title}</div>
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
