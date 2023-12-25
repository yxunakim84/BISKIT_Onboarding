import React from "react";
import Icon, { IconName } from "../Icon/Icon";
interface CategoryItemProps {
  icon: IconName;
  label: string;
}
export default function CategoryItem({ icon, label }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 w-[83.75px]">
      <div className="w-[64px] h-[64px] rounded-[16px] flex flex-col justify-center items-center bg-bg-default border border-border-weak">
        <Icon name={icon} width={52} height={52} />
      </div>
      <label className="text-content-weaker text-body16Rg">{label}</label>
    </div>
  );
}
