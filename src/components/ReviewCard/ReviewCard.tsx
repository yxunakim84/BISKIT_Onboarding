import React from "react";
interface ReviewCardProps {
  description: string;
  label: string;
  animation: {
    ref: React.MutableRefObject<HTMLDivElement | null>;
    style: {
      opacity: number;
      transform: string | undefined;
    };
  };
}
export default function ReviewCard({
  description,
  label,
  animation,
}: ReviewCardProps) {
  return (
    <div
      className="shadow-shadow-2 bg-bg-default rounded-[16px] flex flex-col gap-y-5 p-10"
      {...animation}
    >
      <p className="text-content-weak text-heading20Bd">{description}</p>
      <span className="text-content-weakest text-body16Rg">{label}</span>
    </div>
  );
}
