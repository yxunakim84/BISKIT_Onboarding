"use client";

import { LocaleContext } from "../contexts/locale.context/locale.context";
import { useContext } from "react";

export default function useLocale() {
  return useContext(LocaleContext);
}
