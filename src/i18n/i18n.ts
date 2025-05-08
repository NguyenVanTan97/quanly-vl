import { environment } from "@/environments/environtment";
import i18n from "i18next";
import ABOUT_EN from "public/locales/en/about.json";
import BANNER_EN from "public/locales/en/banner.json";
import BOOKING_EN from "public/locales/en/booking.json";
import FOOTER_EN from "public/locales/en/footer.json";
import HEADER_EN from "public/locales/en/header.json";
import HOME_EN from "public/locales/en/home.json";
import MAIN_EN from "public/locales/en/main.json";
import ABOUT_VI from "public/locales/vi/about.json";
import BANNER_VI from "public/locales/vi/banner.json";
import BOOKING_VI from "public/locales/vi/booking.json";
import FOOTER_VI from "public/locales/vi/footer.json";
import HEADER_VI from "public/locales/vi/header.json";
import HOME_VI from "public/locales/vi/home.json";
import MAIN_VI from "public/locales/vi/main.json";
import { initReactI18next } from "react-i18next";

export const resources = {
 Eng: {
  default: MAIN_EN,
  header: HEADER_EN,
  banner: BANNER_EN,
  home: HOME_EN,
  about: ABOUT_EN,
  booking: BOOKING_EN,
  footer: FOOTER_EN,
 },
 VN: {
  default: MAIN_VI,
  header: HEADER_VI,
  banner: BANNER_VI,
  home: HOME_VI,
  about: ABOUT_VI,
  booking: BOOKING_VI,
  footer: FOOTER_VI,
 },
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
