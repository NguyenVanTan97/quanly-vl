import { NumberFormat } from "@/core/util/NumberFormat";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BookingNowButton } from "../../../components/Button/BookingNow";
import { Select } from "../../../components/Select";
import { useMainContext } from "../../../context/main.context";

export function HourPrice() {
 const { hourPrices, unit } = useMainContext();
 const [selectedPrice, setSelectedPrice] = useState(hourPrices[0]);
 const { t } = useTranslation("home");

 useEffect(() => {
  setSelectedPrice(hourPrices[0]);
 }, [hourPrices]);

 return (
  <div className="bg-background py-12 lg:py-8">
   <div className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center">
    <span className="uppercase font-bold text-xl md:text-2xl">
     {t("hourPrice.title")}
    </span>
    <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
     <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center">
      <Select
       className="w-56"
       onChange={(e) => {
        const hour = e.target.value;
        const item = hourPrices.find((f) => f.title === hour);
        item && setSelectedPrice(item);
       }}
      >
       {hourPrices.map((price) => (
        <option key={price.title} value={price.title}>
         {price.title} {t("hourPrice.unit")}
        </option>
       ))}
      </Select>
      <span className="gradient-text font-bold text-2xl md:text-3xl">
       {NumberFormat.format(selectedPrice?.price, unit)} {unit}
      </span>
     </div>
     <BookingNowButton className="px-16 !py-2.5 !text-sm md:!text-base md:!px-6 md:!py-1" />
    </div>
   </div>
  </div>
 );
}
