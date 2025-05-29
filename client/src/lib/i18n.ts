// client/src/lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "@/locales/fr/translation.json";
import translationAR from "@/locales/ar/translation.json";
import translationEN from "@/locales/en/translation.json";

const resources = {
  fr: { translation: translationFR },
  ar: { translation: translationAR },
  en: { translation: translationEN },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
