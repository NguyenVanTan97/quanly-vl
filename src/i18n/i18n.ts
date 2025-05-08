import { environment } from "@/environments/environtment";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  Eng: {},
  VN: {},
} as const;

i18n.use(initReactI18next).init({
  resources,
  ns: ["default", "header", "banner", "home", "about", "booking", "footer"],
  lng: environment.defaultLanguge,
  fallbackLng: environment.defaultLanguge,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
