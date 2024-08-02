"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BannerSectionScreen,
  GridSection5_1,
  GridSection5_2,
  GridSection5_3,
  GridSection5_4,
} from "../../../../public";
import TitleComponent from "../TitleComponent";
import "swiper/css";
import "swiper/css/pagination";

// Cấu hình Swiper để sử dụng Pagination
import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";

const widhtItem = "w-full lg:w-[41.2875rem]";
const widthItemSlideMobile =
  "w-[14.55rem] h-[27.3125rem] sm:h-[32.3125rem] sm:w-[21.2rem]";
const FlexItemContent = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="container_box_sectio5Flex px-[0.62rem] lg:px-0 lg:flex justify-between items-start">
      <div className="">
        <div data-aos="fade-up">
          <TitleComponent
            title="Trang chủ"
            className={`${widhtItem} text-justify font-normal`}
          >
            Trang chủ Baa Baby là điểm giao tiếp đầu tiên và quan trọng nhất của
            khách hàng khi lên website. Thiết kế của website có cấu trúc đơn
            giản và dễ hiểu để khách hàng dễ dàng điều hướng trang web.
          </TitleComponent>
        </div>
        <div
          data-aos="fade-up"
          className={`${widhtItem}  lg:h-[24.9375rem] p-[0.5rem] lg:p-[1rem] rounded-[0.5rem] lg:rounded-[1.5rem] bg-[#FFFDFB] mt-[2rem] lg:mt-[3.81rem]`}
        >
          <div className="overflow-hidden h-full w-full shadow_img_banner rounded-sm lg:rounded-[1rem]">
            <Image
              src={BannerSectionScreen}
              alt="GridSection5_1"
              className="w-full object-cover"
            ></Image>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full lg:hidden">
          <Swiper
            modules={[Pagination]}
            // pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1.5}
            className="relative w-[22.5rem] sm:w-[33rem]  mt-[2rem]"
          >
            <SwiperSlide>
              <div className={`${widthItemSlideMobile} `}>
                <Image
                  src={GridSection5_2}
                  alt="GridSection5 2"
                  className="w-full h-full "
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${widthItemSlideMobile} `}>
                <Image
                  src={GridSection5_3}
                  alt="GridSection5 2"
                  className="w-full h-full"
                ></Image>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          data-aos="fade-up"
          className={`${widhtItem} lg:h-[71.25rem] mt-[2rem] lg:mt-[3.12rem] lg:inline-block hidden`}
        >
          <Image
            src={GridSection5_2}
            alt="GridSection5 2"
            className="w-full h-full "
          ></Image>
        </div>
      </div>

      <div className="">
        <div
          data-aos="fade-up"
          className={`${widhtItem} lg:h-[72.25rem] mt-[1rem] lg:inline-block hidden`}
        >
          <Image
            src={GridSection5_3}
            alt="GridSection5 2"
            className="w-full h-full"
          ></Image>
        </div>
        <div
          data-aos="fade-up"
          className={`${widhtItem} lg:h-[33.3125rem] mt-[2rem] lg:mt-[5rem]`}
        >
          <Image
            src={GridSection5_4}
            alt="GridSection5 4"
            className="w-full h-full"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default FlexItemContent;
