import Image from "next/image";
import { BookingCard } from "./Card";
import { BookingTitle } from "./Title";
import { useTranslation } from "react-i18next";

export function GeneralRule(props: { className?: string }) {
  const { t } = useTranslation("booking");
  return (
    <div className={props.className}>
      <BookingTitle
        className="hidden md:block"
        title={t("generalRule.title")}
      />
      <BookingCard
        className="text-xs md:text-sm border-none md:!border md:border-solid md:!border-cgray p-0"
        classNameInner="!bg-white md:bg-[#f9f9f9]  !p-0 md:!p-6"
      >
        <table className="text-xs md:text-sm border-separate border-spacing-4 -mt-5 md:mt-0">
          <tbody>
            <Row
              name={t("generalRule.item.item1.title")}
              icon="/images/booking/checkin.png"
            >
              <p>
                {t("generalRule.item.item1.desc")}
                <br />
                {t("generalRule.item.item1.desc1")}
              </p>
            </Row>
            <Row
              name={t("generalRule.item.item2.title")}
              icon="/images/booking/checkout.png"
            >
              {t("generalRule.item.item2.desc")}
            </Row>
            <Row name={t("generalRule.item.item3.title")}>
              {t("generalRule.item.item3.desc")}
            </Row>
            <Row name={t("generalRule.item.item4.title")}>
              {t("generalRule.item.item4.desc")}
            </Row>
            <Row name={t("generalRule.item.item5.title")}>
              {t("generalRule.item.item5.desc")}
              <br />
              {t("generalRule.item.item5.desc1")}
              <br />
              {t("generalRule.item.item5.desc2")}
              <br />
              {t("generalRule.item.item5.desc3")}
              <br />
              {t("generalRule.item.item5.desc4")}
            </Row>
            <Row name={t("generalRule.item.item6.title")}>
              {t("generalRule.item.item6.desc")}
            </Row>
            <Row name={t("generalRule.item.item7.title")}>
              <Image
                src="/images/booking/PaymentAccept.png"
                alt="Payment accept"
                width={239}
                height={39}
              />
              {t("generalRule.item.item7.desc")}
            </Row>
            <Row name={t("generalRule.item.item8.title")}>
              {t("generalRule.item.item8.desc")}
            </Row>
            <Row name={t("generalRule.item.item9.title")}>
              {t("generalRule.item.item9.desc")}
            </Row>
            <Row name={t("generalRule.item.item10.title")}>
              {t("generalRule.item.item10.desc")}
            </Row>
          </tbody>
        </table>
      </BookingCard>
    </div>
  );
}

function Row(
  props: {
    icon?: string;
    name: string;
  } & React.PropsWithChildren
) {
  return (
    <tr className="flex flex-col md:table-row gap-2 my-2 md:my-auto">
      <td className="align-top flex items-start gap-x-3 min-w-[8rem]">
        <Image
          src={props.icon ? props.icon : "/images/booking/Info-Square.png"}
          alt=""
          width={0}
          height={0}
          className="w-3 h-3 md:w-4 md:h-4"
        />
        <strong>{props.name}</strong>
      </td>
      <td className="text-2xs md:text-xs">{props.children}</td>
    </tr>
  );
}
