import { createContext, useContext } from "react";

export type Lang = "es" | "en";
export type T = { es: string; en: string };

export const LangContext = createContext<Lang>("es");

export function useT() {
  const lang = useContext(LangContext);
  return (t: T) => t[lang];
}

export const useLang = () => useContext(LangContext);
