import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "best_products_key":"the best products",
          "there_is_no_best_products_right_now_key":"there is no best products right now!!"
        }
      },
      ar: {
        translations: {
          "best_products_key":"أفضل المنتجات",
          "there_is_no_best_products_right_now_key":"ﻻ يوجد أفضل منتجات حاليا!!"
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
