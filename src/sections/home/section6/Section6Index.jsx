"use client";

import Image from "next/image";
import {
  QuoteIcon,
  QuoteIconMobile,
  Section6Slide1,
  Section6Slide2,
  Section6Slide3,
  Section6Slide4,
} from "../../../../public";
import TitleComponent from "../TitleComponent";
import Section6Grid from "./Section6Grid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Cấu hình Swiper để sử dụng Pagination
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./progessStyle.css";
import Aos from "aos";
import { useEffect } from "react";
const sizeItem =
  "w-[14.05788rem] sm:w-[13rem] sm:h-[25rem] h-[28.6875rem] lg:w-[20.7625rem] lg:h-[42.74381rem] flex-shrink-0";
const Section6Index = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="">
      <div className="lg:mt-[3.5rem] px-[0.62rem] lg:px-0 lg:ml-[9rem]">
        <QuoteIcon className="lg:inline-block hidden"></QuoteIcon>
        <QuoteIconMobile className="inline-block lg:hidden ml-[0.3rem] sm:ml-[1rem] scale-x-[1.2] sm:scale-x-[1.5] scale-y-[1.3] -mb-3"></QuoteIconMobile>
        <div className="lg:ml-[2.75rem]">
          <h2 className="text-[1.0625rem] sm:text-[1.6rem] lg:text-[3.75rem] font-bold text-Loan-Baa-baa1 leading-[1.8125rem] sm:leading-[2.4125rem] lg:leading-[5.1875rem] w-full lg:w-[71.75rem] pl-[2.57rem] lg:pl-0 lg:pr-[2rem]  lg:mt-[1.63rem]">
            Chăm sóc trẻ, yêu thương tận tâm -{" "}
            <span className="baa_baby  leading-[1.8125rem] lg:leading-[5.1875rem]">
              Baa Baby
            </span>{" "}
            luôn bên cạnh từng bước đi
          </h2>
          <div className="lg:ml-[2.44rem] mt-[1.5rem] lg:mt-[3.75rem]">
            <Section6Grid></Section6Grid>
            <div
              data-aos="zoom-out"
              className="lg:w-[42.75rem] text-center mt-[4.38rem] lg:mt-[7.5rem] lg:ml-[14.44rem]"
            >
              <TitleComponent title="Tối ưu Responsive" className="font-normal">
                Với thiết kế UI responsive, người xem sẽ có một trải nghiệm
                tương đồng trên điện thoại và các môi trường khác
              </TitleComponent>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pl-[1rem] sm:pl-[0.62rem] lg:pl-0 lg:container  mt-[2rem] lg:mt-[4.25rem] ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, type: "progressbar" }}
          spaceBetween={0}
          slidesPerView={1.3}
          className="select-none w-[22.5rem] sm:w-full lg:w-[93rem] "
          breakpoints={{
            // khi màn hình >= 640px
            240: {
              slidesPerView: 1.5,
              // spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.3,
              // spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              // spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div
              data-aos="zoom-in"
              className={`mt-[1.5rem] lg:mt-0 ${sizeItem} `}
            >
              <Image
                src={Section6Slide4}
                alt="Section6Slide1"
                className="w-full h-full"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in" className={`lg:mt-[4.81rem] ${sizeItem}`}>
              <Image
                src={Section6Slide1}
                alt="Section6Slide1"
                className="w-full h-full"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="zoom-in"
              className={`mt-[1.5rem] lg:mt-0 ${sizeItem}`}
            >
              <Image
                src={Section6Slide2}
                alt="Section6Slide1"
                className="w-full h-full"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in" className={`lg:mt-[4.81rem] ${sizeItem}`}>
              <Image
                src={Section6Slide3}
                alt="Section6Slide1"
                className="w-full h-full"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="lg:container mt-[4.25rem] flex space-x-[5.63rem] pl-0">
        
       
     
      </div> */}
    </section>
  );
};

export default Section6Index;
