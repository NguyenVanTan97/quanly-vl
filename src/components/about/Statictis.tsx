import { useTranslation } from "react-i18next";

export function Statictis() {
  const { t } = useTranslation("about");
  return (
    <div
      className="py-14 px-8 md:px-0 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/bg-statictis.svg)" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        <Item value={12} title={t("statictis.item1")} />
        <Item value={75} title={t("statictis.item2")} />
        <Item value={47} title={t("statictis.item3")} />
        <Item value={10} title={t("statictis.item4")} />
      </div>
    </div>
  );
}

function Item(props: { value: number; title: string }) {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="text-5xl md:text-6xl lg:text-8xl font-bold">
        {props.value}
      </p>
      <p className="text-base md:text-sm lg:text-base mt-1">{props.title}</p>
    </div>
  );
}
