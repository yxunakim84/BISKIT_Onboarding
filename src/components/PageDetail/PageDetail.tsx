"use client";

import Header from "../Header/Header";
import Part1 from "../Part1";
import Part2 from "../Part2";
import Part3 from "../Part3";
import Part4 from "../Part4";
import Part5 from "../Part5";
import Part6 from "../Part6";
import Part7 from "../Part7";
import Footer from "../Footer";
import { DeviceType } from "@/types/device";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";
import useLocale from "@/hooks/useLocale";
import { PageData } from "@/contexts/locale.context/locale.context";

interface PageDetailProps {
  dict: PageData;
  lang: string;
}

export default function PageDetail({
  dict: passedDict,
  lang,
}: PageDetailProps) {
  const { setLocale, setDict } = useLocale();

  const [device, setDevice] = useState<DeviceType>("Unknown");
  const [windowWidth, setWindowWidth] = useState(0);

  const updateWindowDimensions = () => {
    const newWidth = window.outerWidth;
    setWindowWidth(newWidth);
  };

  const detectDevice = (userAgent: string): DeviceType => {
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
  };

  useEffect(() => {
    setDict(passedDict);
    setLocale(lang === "ko" ? "ko" : "en");
  }, [lang, passedDict, setDict, setLocale]);

  useEffect(() => {
    if (navigator && typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent;
      const device = detectDevice(userAgent);
      setDevice(device);
    } else {
      setDevice("Unknown");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <main className="w-screen">
      {windowWidth !== 0 && (
        <>
          <Header />
          <Part1 device={device} windowWidth={windowWidth} />
          <Part2 />
          <Part3 />
          <Part4 windowWidth={windowWidth} />
          <Part5 />
          <Part6 />
          <Part7 device={device} />
          <Footer />
        </>
      )}
    </main>
  );
}
