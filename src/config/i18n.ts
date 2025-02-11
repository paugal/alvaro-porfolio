// src/config/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "../../public/locales/es.json";
import translationEN from "../../public/locales/en.json";
import translationCAT from "../../public/locales/cat.json";
import translationFR from "../../public/locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN },
    cat: { translation: translationCAT },
    fr: { translation: translationFR },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
