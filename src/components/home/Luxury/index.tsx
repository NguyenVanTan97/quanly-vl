import { useTranslation } from "react-i18next";
import { LuxuryGallery } from "./Gallery";

export function Luxury() {
  const { t } = useTranslation("home");
  return (
    <div className="py-12">
      <h5 className="text-center text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-16 px-8 md:px-16 leading-6">
        {t("luxury")}
      </h5>
      <LuxuryGallery />
    </div>
  );
}
