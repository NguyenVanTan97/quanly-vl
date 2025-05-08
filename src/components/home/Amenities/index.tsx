import { useTranslation } from "react-i18next";
import { AmelitieList } from "./List";

export function Amenities() {
  const { t } = useTranslation("home");
  return (
    <div className="flex flex-col gap-y-16 md:gap-y-24 py-4 md:py-12">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-xl md:text-3xl leading-6 lg:text-5xl font-bold">
          {t("amenities")}
        </h4>
      </div>
      <AmelitieList />
    </div>
  );
}
