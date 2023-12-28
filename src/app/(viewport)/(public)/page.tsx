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
import { DeviceType } from "@/types/device";
import { useEffect, useState } from "react";

export default function Home() {
  const [device, setDevice] = useState<DeviceType>("Unknown");
  function detectDevice(userAgent: string): DeviceType {
    if (/Android/i.test(userAgent)) {
      return "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return "iOS";
    } else if (/Mac/i.test(userAgent)) {
      return "Mac";
    } else if (/Windows/i.test(userAgent)) {
      return "Windows";
    } else {
      return "Unknown";
    }
  }

  useEffect(() => {
    if (navigator && typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent;
      const device = detectDevice(userAgent);
      setDevice(device);
    } else {
      setDevice("Unknown");
    }
  }, []);

  // typeof navigator !== "undefined" ? navigator.userAgent : "unknown";
  // const device = detectDevice(userAgent);

  return (
    <main className="w-screen">
      <Header />
      <Part1 device={device} />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 device={device} />
      <Footer />
    </main>
  );
}
