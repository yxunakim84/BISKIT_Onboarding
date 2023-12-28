"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Part1 from "@/components/Part1";
import Part2 from "@/components/Part2";
import Part3 from "@/components/Part3";
import Part4 from "@/components/Part4";
import Part5 from "@/components/Part5";
import Part6 from "@/components/Part6";
import Part7 from "@/components/Part7";
import * as os from "os";

export default function Home() {
  const platform: NodeJS.Platform = os.platform();

  return (
    <main className="w-screen">
      <Header />
      <Part1 platform={platform} />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 platform={platform} />
      <Footer />
    </main>
  );
}
