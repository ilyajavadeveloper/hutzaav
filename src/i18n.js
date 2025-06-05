// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationRU from "./locales/ru.json";
import translationHE from "./locales/he.json";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  he: { translation: translationHE },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "he",
    interpolation: { escapeValue: false },
  });

export default i18n;
