import { useTranslation } from "react-i18next";
import { useBookingContext } from "../../context/booking.context";
import { TextArea } from "../Form/TextArea";
import { BookingCard } from "./Card";
import { BookingTitle } from "./Title";

export function Request() {
  const { entity, setEntityValue } = useBookingContext();
  const { t } = useTranslation("booking");
  return (
    <div>
      <BookingTitle
        className="!text-base md:!text-xl !mb-1"
        title={t("request.title")}
        gradient
      />
      <p className="text-2xs md:text-sm leading-3">{t("request.note")}</p>
      <BookingCard classNameInner="!p-4 !pt-2 md:!p-6" className="mt-4" border>
        <p className="leading-4">
          <span className="text-xs md:text-base font-bold">
            {t("request.card.title")}
          </span>
          <span className="text-xs md:text-sm"> {t("request.card.note")}</span>
        </p>
        <TextArea
          onChange={(val) => setEntityValue("specifiedRequest", val)}
          className="mt-4 w-full "
          rows={4}
        />
      </BookingCard>
    </div>
  );
}
