import { useMainContext } from "@/context/main.context";
import { NumberFormat } from "@/core/util/NumberFormat";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookingNowButton } from "../../../components/Button/BookingNow";

export function PriceList() {
 const { roomPrices } = useMainContext();
 const { t } = useTranslation("home");
 return (
  <>
   <div className="hidden md:grid  md:grid-cols-3 container mx-auto px-4">
    {roomPrices &&
     roomPrices.map((item, index) => {
      return (
       index < 3 && (
        <PriceItem
         key={index}
         type={item.title}
         price={item.price}
         desc={`${parseInt(item.day) + 1} ${t("priceList.day")} ${item.day} ${t(
          "priceList.night"
         )}`}
         spliter={index < roomPrices.length - 1}
        />
       )
      );
     })}
   </div>

   <Swiper
    className="h-full w-full block md:!hidden"
    spaceBetween={50}
    slidesPerView={1}
    autoplay
    navigation={true}
    modules={[Autoplay, Navigation]}
   >
    {roomPrices &&
     roomPrices.map((item, index) => {
      return (
       index < 3 && (
        <SwiperSlide key={index}>
         <PriceItem
          type={item.title}
          price={item.price}
          desc={`${parseInt(item.day) + 1} ${t("priceList.day")} ${
           item.day
          } ${t("priceList.night")}`}
         />
        </SwiperSlide>
       )
      );
     })}
   </Swiper>
  </>
 );
}

function PriceItem(props: {
 price: number;
 desc: string;
 type: string;
 spliter?: boolean;
}) {
 const { unit } = useMainContext();
 const { t } = useTranslation("home");
 return (
  <div className="my-12 md:my-24 flex flex-col gap-y-4 items-center relative">
   <h5 className="text-center">
    <span className="uppercase gradient-text text-2xl md:text-[40px] font-bold">
     {props.type}
    </span>
   </h5>
   <div className="text-center">
    {/* <span className="text-primary text-2xl font-bold">$</span> */}
    <span className="gradient-text text-2xl text-[45px] font-bold px-2">
     {NumberFormat.format(props.price, unit)} {unit}
    </span>
    {/* <span className="text-primary text-2xl font-bold">VNĐ</span> */}
    <p className="mt-2 uppercase text-base md:text-lg font-medium">
     {props.desc}
    </p>
   </div>
   <div>
    <BookingNowButton className="!py-2.5 !px-16 md:!py-1 md:!px-6 !text-sm md:!text-base" />
   </div>
   {props.spliter && (
    <div className="w-full md:w-min  md:h-full absolute -bottom-10 left-0 md:left-auto md:right-0 md:top-0">
     <div className="h-full w-full flex md:flex-col justify-center items-center">
      <div className="h-0.5 w-full md:w-0.5 md:h-full bg-primary-700 "></div>
      <div className="w-3 h-3 rounded-full gradient"></div>
     </div>
    </div>
   )}
  </div>
 );
}
