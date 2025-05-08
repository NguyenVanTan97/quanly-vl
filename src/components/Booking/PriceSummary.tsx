import { useEffect, useState } from "react";
import { BookingCard } from "./Card";
import { BookingTitle } from "./Title";
import { useMainContext } from "@/context/main.context";
import { useBookingContext } from "@/context/booking.context";
import { useTranslation } from "react-i18next";
import { NumberFormat } from "@/core/util/NumberFormat";

interface TotalRoomPriceEntity {
  price: number;
  GTGT: number;
  totalPrice: number;
}

export function PriceSummary(props: { className?: string }) {
  const { hourPrices, roomPrices, depositAmount, unit } = useMainContext();
  const { entity } = useBookingContext();
  const [totalRoomPrice, setTotalRoomPrice] = useState<TotalRoomPriceEntity>();
  const { t } = useTranslation("booking");

  useEffect(() => {
    if (entity) {   
      if (entity.rentalHours) {
        const hourPrice = hourPrices.find(
          (f) => parseInt(f.title) == entity.rentalHours
        );

        hourPrice &&
          setTotalRoomPrice({
            price: hourPrice.price,
            GTGT: (hourPrice.price * 10) / 100,
            totalPrice: hourPrice.price + (hourPrice.price * 10) / 100,
          });
      } else {
        const roomPrice = roomPrices.find(
          (f) => parseInt(f.day) == entity.totalNights
        );

        roomPrice &&
          setTotalRoomPrice({
            price: roomPrice.price,
            GTGT: (roomPrice.price * 10) / 100,
            totalPrice: roomPrice.price + (roomPrice.price * 10) / 100,
          });
      }
    }
  }, [entity, hourPrices, roomPrices]);

  return (
    <div className={props.className}>
      <BookingTitle title={t("priceSummary.title")} className="hidden md:block" />
      <BookingCard className="text-xs md:text-sm border-none md:!border md:border-solid md:!border-cgray">
        <div className="flex flex-col gap-y-3">
          <BookingTitle
            className="block md:hidden !text-base md:!text-xl !mb-0 md:!mb-3"
            title={t("priceSummary.title")} 
          />
          <div className="text-xs md:text-sm">
            <div className="flex  justify-between">
              <span>{t("priceSummary.room")} </span>
              <span className="font-medium">
                {NumberFormat.format((totalRoomPrice?.price || 0), unit)} {unit}
              </span>
            </div>
            <div className="mt-1 flex justify-between">
              <span>{t("priceSummary.tax")}</span>
              <span className="font-medium">
                {NumberFormat.format((totalRoomPrice?.GTGT || 0), unit)} {unit}
              </span>
            </div>
          </div>
          <div className="-mx-6 px-6 py-4 bg-cgray-500 ">
            <div className="flex justify-between">
              <div>
                <p className="text-base md:text-xl font-bold">{t("priceSummary.price")}</p>
              </div>
              <span className="gradient-text text-base md:text-xl font-bold">
                {NumberFormat.format((totalRoomPrice?.totalPrice || 0), unit)} {unit}
              </span>
            </div>
            <p className="text-2xs md:text-xs">
              (cho&nbsp;
              {entity &&
                entity.adults &&
                entity.childrens &&
                entity.adults + entity.childrens}&nbsp;
              khách và 2 đêm nghỉ)
            </p>
          </div>

          <p className="font-semibold">{t("priceSummary.surcharge")}</p>
          <div className="flex justify-between items-center">
            <span>{t("priceSummary.deposit")}</span>
            <span className="text-2xs md:text-xs font-semibold">
              {NumberFormat.format(depositAmount, unit)} {unit}
            </span>
          </div>
        </div>
        <p className="text-green-600 text-2xs md:text-xs font-semibold">
        {t("priceSummary.depositNote")}
        </p>
      </BookingCard>
    </div>
  );
}
