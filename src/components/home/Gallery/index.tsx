import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.css";
import { useTranslation } from "react-i18next";

export function Gallery() {
  const { t } = useTranslation("home");
  return (
    <div
      className={"bg-[#1e1e1e] pt-10 md:pt-24 pb-10 text-white " + styles.root}
    >
      <div className="max-w-[560px] mx-auto px-4">
        <h5 className="text-xl md:text-5xl font-bold text-center">
          {t("gallery.title")}
        </h5>
        <p className="mt-2 md:mt-4 text-center text-2xs md:text-base leading-4">
          {t("gallery.content")}
        </p>
      </div>
      <div className="mt-6 md:mt-16 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          wrapperClass="mb-12 md:mb-20"
          pagination
          autoplay
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            748: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1260: {
              slidesPerView: 5,
            },
            1366: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/1.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/2.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/3.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/4.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/1.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/2.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/3.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto"
              src="/images/gallery/4.png"
              alt=""
              width={340}
              height={0}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
