"use client";

import Part1 from "@/components/Part1";
import useScrollFadeIn, { DirectionType } from "@/hooks/useScrollFadeIn";
import colors from "@/theme/colors";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center">
      <Part1 />
    </main>
  );
}
