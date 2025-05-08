import { useMainContext } from "@/context/main.context";
import { NumberFormat } from "@/core/util/NumberFormat";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookingNowButton } from "../../Button/BookingNow";
import bgImg from "./assets/bg.png";

export function PerNight() {
 const { roomPrices } = useMainContext();
 const { t } = useTranslation("home");
 const { unit } = useMainContext();
 return (
  <div className="flex flex-col md:flex-row items-center justify-center  container mx-auto px-4 max-w-[820px]">
   <div className=" w-[690px] h-full">
    <Swiper
     spaceBetween={50}
     slidesPerView={1}
     modules={[Autoplay, Pagination]}
     autoplay
     pagination={{
      type: "bullets",
      enabled: true,
     }}
    >
     <SwiperSlide>
      <SlideImage />
     </SwiperSlide>
     <SwiperSlide>
      <SlideImage />
     </SwiperSlide>
     <SwiperSlide>
      <SlideImage />
     </SwiperSlide>
     <SwiperSlide>
      <SlideImage />
     </SwiperSlide>
    </Swiper>
   </div>
   <div className="flex flex-col gap-y-4 relative w-screen md:min-w-[30rem] h-[24rem] md:h-[22rem]">
    <Image
     fill
     src={bgImg}
     alt=""
     className="absolute top-0 left-0 h-full w-full"
    />
    <div className="relative z-10 p-8 pb-12 pr-7">
     <h4 className="uppercase text-white font-bold text-xl md:text-3xl">
      {t("perNight.title")}
     </h4>
     <p className="mt-2 text-xs pr-2 md:pr-0 leading-5 md:text-sm text-white/80 ">
      {t("perNight.content")}
     </p>
     <div className="text-white mt-3 md:mt-8">
      {/* <span className="text-2xl md:text-3xl font-semibold">$</span> */}
      <span className="text-[40px]  font-bold mx-1.5 md:mx-4">
       {NumberFormat.format(roomPrices[0]?.price, unit)} {unit}
      </span>
      <span className="text-lg md:text-xl uppercase">
       /{t("perNight.title")}
      </span>
     </div>
     <div className=" mt-4 md:mt-8">
      <BookingNowButton color="secondary" />
     </div>
    </div>
   </div>
  </div>
 );
}

function SlideImage() {
 return (
  <div className="relative h-[333px]">
   <Image src="/images/rooms/1.png" fill alt="" />
  </div>
 );
}
