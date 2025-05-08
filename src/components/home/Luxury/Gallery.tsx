import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

export function LuxuryGallery() {
  const { t } = useTranslation("home");
  const swiperRef = useRef<any>(null);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-0 md:px-4 flex flex-col-reverse md:flex-row gap-x-4">
        <div className="flex flex-col py-8">
          <Swiper
            className="w-[300px]"
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="px-4 md:px-0">
                <h6 className="uppercase text-primary text-xl md:text-4xl font-bold">
                  {t("luxuryGallery.title")}
                </h6>
                <p className="mt-4 text-xs md:text-sm leading-5">
                  {t("luxuryGallery.content")}
                </p>
                <p className="mt-4 text-xs md:text-base capitalize font-semibold leading-5">
                  {t("luxuryGallery.footer.f1")}
                  <br />
                  {t("luxuryGallery.footer.f2")}
                  <br />
                  {t("luxuryGallery.footer.f3")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-4 md:px-0">
                <h6 className="uppercase text-primary text-xl md:text-4xl font-bold">
                  {t("steamGallery.title")}
                </h6>
                <p className="mt-4 text-xs md:text-sm leading-5">
                  {t("steamGallery.content")}
                </p>
                <p className="mt-4 text-xs md:text-base capitalize font-semibold leading-5">
                  {t("steamGallery.footer.f1")}
                  <br />
                  {t("steamGallery.footer.f2")}
                  <br />
                  {t("steamGallery.footer.f3")}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="hidden md:flex mt-24 gap-x-4">
            <button
              className="swiper-button-prev-custom bg-gradient-to-r from-primary to-primary-700 py-2 px-4 text-white -skew-x-6"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6103 1.03181C13.0158 1.43732 13.0527 2.07187 12.7209 2.51902L12.6103 2.64713L2.75791 12.5L12.6103 22.3529C13.0158 22.7584 13.0527 23.393 12.7209 23.8401L12.6103 23.9682C12.2048 24.3737 11.5702 24.4106 11.1231 24.0788L10.995 23.9682L0.334415 13.3077C-0.0710917 12.9022 -0.107957 12.2676 0.223822 11.8205L0.334415 11.6924L10.995 1.03181C11.441 0.585751 12.1642 0.585751 12.6103 1.03181Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              className="swiper-button-next-custom bg-gradient-to-r from-primary to-primary-700 py-2 px-4 text-white -skew-x-6"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.334543 23.9682C-0.0709637 23.5627 -0.107828 22.9281 0.22395 22.481L0.334543 22.3529L10.1869 12.5L0.334543 2.64709C-0.0709637 2.24158 -0.107828 1.60703 0.22395 1.15988L0.334543 1.03177C0.74005 0.626267 1.3746 0.589402 1.82175 0.921181L1.94986 1.03177L12.6104 11.6923C13.0159 12.0978 13.0528 12.7324 12.721 13.1795L12.6104 13.3076L1.94986 23.9682C1.5038 24.4142 0.780601 24.4142 0.334543 23.9682Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center ">
          <img
            src="/images/luxuries/1.png"
            alt="Luxury"
            className="object-cover md:object-contain h-64 md:h-full max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
