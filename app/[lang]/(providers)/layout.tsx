"use client";

import LocaleProvider from "../../../contexts/locale.context/locale.context";
import React from "react";

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
