import React from "react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-0 w-full">
      <div
        className="h-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(248, 250, 252, 0.00) 0%, #F8FAFC 100%",
        }}
      />
      <div className="bg-bg-elevation1 w-full h-[84px] pt-2 pb-5 mobile:px-5 laptop:px-10">
        <button className="bg-bg-primary p-4 text-heading18Bd w-full rounded-[12px]">
          베타테스터 신청하기
        </button>
      </div>
    </div>
  );
}
