import { useTranslation } from "react-i18next";
import { BookingCard } from "./Card";
import { BookingTitle } from "./Title";
import { useMainContext } from "@/context/main.context";
import { NumberFormat } from "@/core/util/NumberFormat";

export function CancelationCost() {
  const { cancelationCost, unit } = useMainContext();
  const { t } = useTranslation("booking");
  return (
    <div>
      <BookingTitle
        className="!text-base md:!text-xl"
        title={t("cancelationCost.title")}
      />
      <BookingCard className="text-xs md:text-sm">
        <p className="font-semibold"> Miễn phí hủy đến 23:59, 4 tháng 1</p>
        <div className="mt-1 flex justify-between">
          Từ 00:00 ngày 5 tháng 1
          <span className="font-semibold text-xs md:text-sm">
            {NumberFormat.format(cancelationCost, unit)} {unit}
          </span>
        </div>
      </BookingCard>
    </div>
  );
}
