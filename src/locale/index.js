import { createI18n } from "vue-i18n";
import es from "./es.json";
import en from "./en.json";

const userLang = (navigator.language || navigator.userLanguage).split("-")[0];
const i18n = createI18n({
  locale: userLang,
  fallbackLocale: "en",
  messages: {
    es,
    en,
  },
});

export { i18n, es, en };
