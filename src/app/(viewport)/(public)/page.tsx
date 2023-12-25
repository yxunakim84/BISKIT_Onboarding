"use client";

import Part1 from "@/components/Part1";
import Part2 from "@/components/Part2";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import colors from "@/theme/colors";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center">
      <Part1 />
      <Part2 />
    </main>
  );
}
