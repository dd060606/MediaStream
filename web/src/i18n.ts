import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./langs/en.json";
import translationFR from "./langs/fr.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
