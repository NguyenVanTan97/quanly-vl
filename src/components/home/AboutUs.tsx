import { useTranslation } from "react-i18next";
import { BusinessName } from "../../components/BusinessName";

export function AboutUs() {
  const { t } = useTranslation("home");
  return (
    <div className="container mx-auto pt-12 md:py-24 !max-w-[900px] ">
      <h4 className="uppercase text-center text-2xs md:text-lg font-bold">
        {t("about.title")}
      </h4>
      <div className="mt-3 md:mt-4 flex flex-col leading-4 md:leading-none md:block md:flex-row text-center">
        <span className="text-[22px] md:text-5xl font-bold ">
          {t("about.welcome")}
        </span>
        <BusinessName className="text-inherit text-[22px] md:text-5xl" />
      </div>
      <p className="mt-4 text-xs md:text-base text-center leading-5 px-6 md:px-0">
        {t("about.content")}
      </p>
    </div>
  );
}
