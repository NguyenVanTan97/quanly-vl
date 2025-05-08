import "swiper/css";
import { HourPrice } from "./HourPice";
import { PerNight } from "./PerNight";
import { PriceList } from "./PriceList";
export function ShortPrice() {
  return (
    <div className="flex flex-col py-12">
      <PerNight />
      <PriceList />
      <HourPrice />
    </div>
  );
}
