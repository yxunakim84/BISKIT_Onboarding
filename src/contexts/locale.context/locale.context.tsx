import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export type PageKey =
  | "page1"
  | "page2"
  | "page3"
  | "page4"
  | "page5"
  | "page6"
  | "page7"
  | "applyButton"; // 다른 키 추가

export type Page = {
  title: string;
  subTitle?: string;
  description?: string;
};

export type PageData = Record<PageKey, Page>;

interface Dictionary {
  [key: string]: string;
}

export type LocaleContextValue = {
  locale: "ko" | "en";
  setLocale: Dispatch<SetStateAction<"ko" | "en">>;
  changeLocale: Dispatch<SetStateAction<"ko" | "en">>;
  dict: PageData | {};
  setDict: Dispatch<SetStateAction<{}>>;
};

const initialValue: LocaleContextValue = {
  locale: "ko",
  setLocale: () => {},
  changeLocale: () => {},
  dict: {},
  setDict: () => {},
};

export const LocaleContext = createContext<LocaleContextValue>(initialValue);
export default function LocaleProvider({ children }: PropsWithChildren<{}>) {
  const [locale, setLocale] = useState<"ko" | "en">("ko");
  const [dict, setDict] = useState<PageData | {}>({});

  const changeLocale: React.Dispatch<React.SetStateAction<"ko" | "en">> =
    useCallback(
      (newLocale) => {
        setLocale(newLocale);
      },
      [setLocale]
    );

  const value: LocaleContextValue = useMemo(
    () => ({
      locale,
      setLocale,
      changeLocale,
      dict,
      setDict,
    }),
    [locale, setLocale, changeLocale, dict, setDict]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
