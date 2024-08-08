"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styleThumbs.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import {
  Arrow_right_light,
  bigSlide2,
  bigSlide2_1,
  bigSlide2_2,
  SlideSection2_1,
  SlideSection2_2,
  SlideSection2_3,
  SlideSection2_4,
} from "../../../../public";
import Image from "next/image";
import Aos from "aos";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
const cssItemImg =
  "w-[6.809rem] h-[8.49969rem] lg:w-[15.86056rem] lg:h-[18.55044rem]";

const bigSlideData = [
  { img: bigSlide2_2 },
  { img: bigSlide2 },
  { img: bigSlide2_1 },
  { img: SlideSection2_4 },
];
const ThumbsGallery = () => {
  const swiperNext = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="pr-[0.62rem] flex justify-between items-end w-full mt-[1.5rem] lg:mt-[9.06rem] ">
      <div
        data-aos="fade-right"
        className="mySwiper w-[6rem] sm:w-[calc(50%_-_1.8rem)] lg:w-[calc(50%_+_5rem)] select-none flex-shrink-0"
      >
        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#fff",
          //   "--swiper-pagination-color": "#fff",
          // }}
          onSwiper={(swiper) => {
            swiperNext.current = swiper;
          }}
          spaceBetween={0}
          slidesPerView={3}
          modules={[FreeMode, Thumbs, Autoplay]}
          loop={true}
          freeMode={true}
          thumbs={{ swiper: thumbsSwiper }}
          direction="horizontal"
          watchSlidesProgress={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            // when window width is >= 640px
            240: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 23,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Image
              src={SlideSection2_1}
              alt="SlideSection2_1"
              className={cssItemImg}
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideSection2_2}
              alt="SlideSection2_2"
              className={cssItemImg}
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideSection2_3}
              alt="SlideSection2_3"
              className={cssItemImg}
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideSection2_4}
              alt="SlideSection2_4"
              className={cssItemImg}
            ></Image>
          </SwiperSlide>
          <div className="flex justify-center space-x-[0.5rem] mb-[2.3rem] mt-[1.2rem] ">
            <button
              type="button"
              onClick={() => {
                swiperNext.current?.slidePrev();
              }}
              className="active:scale-95 sm:inline-block hidden"
            >
              <Arrow_right_light className="rotate-180"></Arrow_right_light>
            </button>
            <button
              type="button"
              onClick={() => {
                swiperNext.current?.slideNext();
              }}
              className="active:scale-95  sm:inline-block hidden"
            >
              <Arrow_right_light></Arrow_right_light>
            </button>
          </div>
        </Swiper>
      </div>
      <div data-aos="fade-left" className="relative">
        <PriceItem></PriceItem>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={1}
          modules={[FreeMode, Navigation, Thumbs]}
          loop={true}
          freeMode={true}
          className="w-[15.82463rem] sm:w-[17.02463rem] h-[21.21606rem] lg:w-[36.656rem] lg:h-[46.30375rem] order-2  mx-0 my_swiper2 relative select-none"
        >
          <SwiperSlide>
            <Image
              src={bigSlide2_2}
              alt="bigSlide2_2"
              className="w-full h-full object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bigSlide2}
              alt="bigSlide2_2"
              className="w-full h-full object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bigSlide2_1}
              alt="bigSlide2_1"
              className="w-full h-full object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SlideSection2_4}
              alt="SlideSection2_4"
              className="w-full h-full object-cover"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export function PriceItem() {
  return (
    <div
      className={`z-50 w-[12.1105rem] lg:w-[17.73425rem] h-[6rem] lg:h-[8.78619rem] bottom-[4.53rem] right-[0.54rem] top-auto lg:top-[9.72rem] lg:right-[2.03rem] bg-white/50 absolute  rounded-[0.5rem] lg:rounded-[1rem] backdrop-blur-[3.25px] py-[0.95rem] px-[0.75rem] lg:px-[1.07rem]`}
    >
      <div className="gotham_font_light text-[#717171] [&_.item]:text-[0.54406rem] [&_.item]:lg:text-[0.89181rem] [&_.item]:size-[1.22413rem] [&_.item]:lg:size-[1.60075rem] [&_.item]:rounded-full [&_.item]:bg-white [&_.item]:flex [&_.item]:items-center [&_.item]:justify-center flex space-x-[0.45rem]">
        <div className="item">S</div>
        <div className="item">M</div>
        <div className="item">L</div>
      </div>
      <p className="font-semibold leading-[1.16rem] text-[1rem] pr-[2rem] pt-[0.82rem] hidden lg:block">
        Chân váy quần xếp ly bé gái xanh navy
      </p>
      <p className="font-semibold leading-[0.87rem] text-[0.75rem] pr-[2rem] pt-[0.44rem] lg:hidden block">
        Áo thun nam sơ sinh bé trai Xám
      </p>
      <p className="text-HH lowercase text-[0.75rem] lg:text-[1.125rem] font-bold leading-[1.06763rem] lg:leading-[1.75rem] mt-[0.11rem] lg:mt-[0.52rem]">
        250.000 <span className="underline">Đ</span>
      </p>
    </div>
  );
}
export default ThumbsGallery;
