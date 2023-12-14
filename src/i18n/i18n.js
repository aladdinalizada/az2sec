import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // passes i18n down to react-i18next
// Import languages
import az from "../../public/locales/az/translation.json";
import en from "../../public/locales/en/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    az: {
      translation: az,
    },
    en: {
      translation: en,
    },
  }, // Where we're gonna put translations' files
  lng: "az", // initial language of the App
  fallbackLng: "az", // if the language detector fails to find a language, it will  // logs info level to console output. Helps finding issues with loading not working
});

export default i18n;
