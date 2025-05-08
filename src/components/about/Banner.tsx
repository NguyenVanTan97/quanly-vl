import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation("banner");
  return (
    <div
      className="h-64 md:h-80 w-full bg-cover relative bg-center"
      style={{
        backgroundImage: "url(/images/banner.svg)",
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-primary/80 to-primary-700/20"></div>
      <div className="flex flex-col h-full w-full justify-center items-center relative z-10">
        <h2 className="mt-32 md:mt-28 text-3xl md:text-5xl font-bold text-white">
          {t("about")}
        </h2>
      </div>
    </div>
  );
};
