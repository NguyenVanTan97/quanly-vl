import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination, Swiper, Thumbs } from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export function ThumbsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<Swiper | any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slides = [
    "/images/rooms/1.png",
    "/images/about/img-1.png",
    "/images/about/img-2.png",
    "/images/about/img-3.png",
    "/images/about/img-4.png",
    "/images/about/img-5.png",
    "/images/about/img-6.png",
    "/images/about/img-7.png",
    "/images/about/img-10.png",
  ];

  const divRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (divRef && divRef.current) {
      setIsFullscreen(true);
      divRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    function handleEsc(e: any) {
      if (e.type === "fullscreenchange") {
        if (!document.fullscreenElement) {
          setIsFullscreen(false);
        }
      }
    }

    document.addEventListener("fullscreenchange", handleEsc, false);
    return () => {
      document.removeEventListener("fullscreenchange", handleEsc, false);
    };
  }, [isFullscreen]);

  return (
    <div className="mb-4" ref={divRef}>
      <SwiperReact
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              onClick={handleFullscreen}
              width={300}
              height={300}
              className={`w-full object-cover ${
                isFullscreen ? "h-[calc(100vh-160px)] !object-contain" : "h-56"
              }`}
              src={slide}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </SwiperReact>
      <SwiperReact
        className="mt-2"
        onSwiper={(swiper) => {
          if (thumbsSwiper) {
            setThumbsSwiper(swiper);
          }
        }}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              width={100}
              height={100}
              className={`w-full object-cover ${
                isFullscreen ? "h-36" : "h-14"
              }`}
              src={slide}
              alt={`Thumbnail ${index}`}
            />
          </SwiperSlide>
        ))}

        <div
          className={`absolute w-[calc((100%-20px)/3)] bg-black/40 bottom-0 right-0 flex justify-center items-center text-white text-lg font-semibold z-10 ${
            isFullscreen ? "h-36" : "h-14"
          }`}
        >
          {slides.length <= 4 ? slides.length : `+ ${slides.length - 4}`}
        </div>
      </SwiperReact>
    </div>
  );
}
