import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
const resources = {
  en: {
    translation: {
      good: "Good",
    },
  },
  hi: {
    translation: {
      good: "अच्छा",
    },
  },
  fr: {
    translation: {
      good: "Bien",
    },
  },
  gu: {
    translation: {
      good: "સારું",
    },
  },
  de: {
    translation: {
      good: "Gut",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
