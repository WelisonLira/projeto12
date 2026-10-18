import React, { createContext, useContext } from "react";

export const I18nContext = createContext({
  t: (key) => key
});

export const I18nProvider = ({ children }) => {
  // Simples, só para exemplo; adapte para internacionalização real se quiser
  const t = (key) => key;
  return (
    <I18nContext.Provider value={{ t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);