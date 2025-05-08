import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.module.css";
import { useTranslation } from "react-i18next";
export function Review() {
  const { t } = useTranslation("home");
  return (
    <div className="review container mx-auto px-4 pt-4 pb-14 md:py-24">
      <div className="max-w-[700px] mx-auto">
        <h5 className="text-xl md:text-5xl font-bold text-center">
          {t("review.title")}
        </h5>
        <p className="mt-2 md:mt-4 text-2xs md:text-base text-center">
          {t("review.content.item1")}
          <strong>&nbsp;{t("review.content.item2")}</strong>&nbsp;
          {t("review.content.item3")}
        </p>
      </div>
      <div className="mt-10 md:mt-16 max-w-[740px] mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          wrapperClass="mb-10"
          autoplay
          navigation
          pagination={{}}
        >
          <div className="py-24">
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
function ReviewItem() {
  const { t } = useTranslation("home");
  return (
    <div className="flex flex-col max-w-[560px] mx-auto">
      <p className="text-center text-xs justify-center px-5 md:px-0 md:text-xl">
        “ {t("review.reviewItem.content")} ”
      </p>
      <div className="mx-auto mt-8">
        <Image
          src="/images/reviewers/adminlevine.png"
          width={49}
          height={50}
          alt="Adam Levine"
        />
      </div>
      <p className="mt-4 text-center text-xs md:text-xl">
        <strong>{t("review.reviewItem.footer.reviewer")}</strong> -&nbsp;
        {t("review.reviewItem.footer.from")}
      </p>
    </div>
  );
}
