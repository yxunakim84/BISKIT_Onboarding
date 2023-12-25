"use client";

import Part1 from "@/components/Part1";
import Part2 from "@/components/Part2";
import Part3 from "@/components/Part3";
import Part4 from "@/components/Part4";
import Part5 from "@/components/Part5";
import Part6 from "@/components/Part6";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <div className="h-[120px] w-full bg-bg-elevation2" />
    </main>
  );
}
