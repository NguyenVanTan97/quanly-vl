import Image, { StaticImageData } from "next/image";
import bathub from "./assets/bathub.png";
import breakfast from "./assets/breakfast.png";
import mattress from "./assets/mattress.png";
import smarthome from "./assets/smarthome.png";
import tivi from "./assets/tivi.png";
import wifi from "./assets/wifi.png";
import { useTranslation } from "react-i18next";
export function AmelitieList() {
  const { t } = useTranslation("home");
  return (
    <div className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <AmelitieItem
          title={t("amelitieList.mattress.title")}
          desc={t("amelitieList.mattress.desc")}
          icon={mattress}
        />
        <AmelitieItem
          title={t("amelitieList.wifi.title")}
          desc={t("amelitieList.wifi.desc")}
          icon={wifi}
        />
        <AmelitieItem
          title={t("amelitieList.tv.title")}
          desc={t("amelitieList.tv.desc")}
          icon={tivi}
        />
        <AmelitieItem
          title={t("amelitieList.bathtub.title")}
          desc={t("amelitieList.bathtub.desc")}
          icon={bathub}
        />
        <AmelitieItem
          title={t("amelitieList.smartHome.title")}
          desc={t("amelitieList.smartHome.desc")}
          icon={smarthome}
        />
        <AmelitieItem
          title={t("amelitieList.breakfast.title")}
          desc={t("amelitieList.breakfast.desc")}
          icon={breakfast}
        />
      </div>
    </div>
  );
}
function AmelitieItem(props: {
  title: string;
  desc: string;
  icon: string | StaticImageData;
}) {
  return (
    <div className="flex gap-x-4">
      <div className="w-14">
        <Image className="object-contain" src={props.icon} alt={props.title} />
      </div>
      <div className="flex flex-col justify-between">
        <p className="uppercase text-sm md:text-xl font-bold">{props.title}</p>
        <p className="mt-2 md:mt-3 text-2xs md:text-sm">{props.desc}</p>
      </div>
    </div>
  );
}
