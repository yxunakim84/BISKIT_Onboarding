import { Locale } from "@/types/locale";
import "server-only";
const dictionaries = {
  en: () =>
    import("@/translations/en_US.json").then((module) => module.default),
  ko: () =>
    import("@/translations/ko_KR.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
