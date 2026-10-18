import React, { createContext, useState } from "react";
import pt from "../i18n/pt.json";
import en from "../i18n/en.json";
import es from "../i18n/es.json";

const langs = { pt, en, es };

export const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "pt");
  const t = (key) => langs[lang][key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}