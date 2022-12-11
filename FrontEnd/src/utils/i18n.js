import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationsEnCart from "./locales/en/cart.json"
import translationsEnFavorite from "./locales/en/favorite.json"
import translationsEnHome from "./locales/en/home.json"
import translationsEnCommon from "./locales/en/common.json"
import translationsEnLogin from "./locales/en/login.json"
import translationsEnRegister from "./locales/en/register.json"

import translationsArCart from "./locales/ar/cart.json"
import translationsArFavorite from "./locales/ar/favorite.json"
import translationsArHome from "./locales/ar/home.json"
import translationsArCommon from "./locales/ar/common.json"
import translationsArLogin from "./locales/ar/login.json"
import translationsArRegister from "./locales/ar/register.json"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          ...translationsEnCart,
          ...translationsEnFavorite,
          ...translationsEnHome,
          ...translationsEnCommon,
          ...translationsEnLogin,
          ...translationsEnRegister
        }
      },
      ar: {
        translations: {
          ...translationsArCart,
          ...translationsArFavorite,
          ...translationsArHome,
          ...translationsArCommon,
          ...translationsArLogin,
          ...translationsArRegister
        }
      }
    },
    fallbackLng: ["ar" , "en"],
    debug: process.env.NODE_ENV === "development",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
