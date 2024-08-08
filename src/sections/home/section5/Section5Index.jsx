"use client";

import FlexItemContent from "./FlexItemContent";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CardSlideBottom from "./CardSlideBottom";
import Image from "next/image";
import {
  SlideSection5_1,
  SlideSection5_2,
  SlideSection5_3,
} from "../../../../public";
const Section5Index = () => {
  return (
    <section className="bg-[rgba(250,212,227,0.3)] w-full mt-[6rem] lg:mt-[9rem] pt-[4.38rem] lg:pt-[12.19rem] pb-[6rem] lg:pb-[16rem] relative">
      <div className="lg:container ">
        <FlexItemContent></FlexItemContent>
      </div>

      <div className="w-full mt-[2.5rem] lg:mt-[6.81rem]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          speed={1000}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mt-[2.5rem] lg:mt-[7.5rem] z-10 w-[24rem] sm:w-full"
          breakpoints={{
            // when window width is >= 640px
            240: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          //     pagination={{ clickable: true }}
          //     autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <CardSlideBottom>
              <Image
                src={SlideSection5_1}
                alt="SlideSection5 1"
                className="w-full h-auto lg:-mt-[6.42rem]"
              ></Image>
            </CardSlideBottom>
          </SwiperSlide>
          <SwiperSlide>
            <CardSlideBottom>
              <Image
                src={SlideSection5_2}
                alt="SlideSection5 2"
                className="w-full  h-auto lg:-mt-[11.95rem]"
              ></Image>
            </CardSlideBottom>
          </SwiperSlide>
          <SwiperSlide>
            <CardSlideBottom>
              <Image
                src={SlideSection5_3}
                alt="SlideSection5 3"
                className="w-[calc(100%_+_2rem)]  h-auto lg:-mt-[8.3rem]"
              ></Image>
            </CardSlideBottom>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="over_bg_slide absolute bottom-0 z-20 pointer-events-none w-full lg:h-[28.8125rem] h-[11.625rem]"></div>
    </section>
  );
};
export default Section5Index;
