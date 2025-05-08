import { useTranslation } from "react-i18next";

export function Step() {
  const { t } = useTranslation("about");
  return (
    <div className="pt-20 md:py-14">
      <div className="w-full h-[1px] bg-primary hidden md:block"></div>
      <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 ">
        <StepItem
          index="01"
          title={t("step.stepItem1.title")}
          desc={t("step.stepItem1.desc")}
        />
        <StepItem
          index="02"
          title={t("step.stepItem2.title")}
          desc={t("step.stepItem2.desc")}
        />
        <StepItem
          index="03"
          title={t("step.stepItem3.title")}
          desc={t("step.stepItem3.desc")}
        />
      </div>
    </div>
  );
}

function StepItem(props: { index: string; title: string; desc: string }) {
  return (
    <div>
      <div className="w-full h-[1px] bg-primary block md:hidden"></div>
      <div className="flex justify-around -translate-y-1/2">
        <div className="w-[22px] h-[22px] gradient rounded-full"></div>
      </div>
      <div className="flex justify-center items-center flex-col pb-8 px-2 pt-2 md:p-8">
        <span className="text-5xl md:text-7xl font-medium md:font-bold tracking-tighter md:tracking-normal">
          {props.index}
        </span>
        <span className="mt-3 md:mt-4 font-semibold text-base md:text-xl uppercase">
          {props.title}
        </span>
        <p className="text-xs md:text-base  text-center mt-2 pb-6 md:pb-0">
          {props.desc}
        </p>
      </div>
    </div>
  );
}
