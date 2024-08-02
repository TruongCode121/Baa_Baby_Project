"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import TitleComponent from "../TitleComponent";

import "aos/dist/aos.css"; // Import CSS của AOS
import AOS from "aos";

const imgData = [
  { img: SlideSection2_1 },
  { img: SlideSection2_2 },
  { img: SlideSection2_3 },
  { img: SlideSection2_4 },
];
const bigSlideData = [
  { img: bigSlide2_2 },
  { img: bigSlide2 },
  { img: bigSlide2_1 },
  { img: SlideSection2_4 },
];
const cssItemImg = "w-[14.86056rem] h-[18.55044rem]";
const Section2Slide = () => {
  const [btnSlide, SetBtnSlide] = useState(3);
  const [slide1, SetSlide1] = useState(0);
  const [slide2, SetSlide2] = useState(0);
  const [slide3, SetSlide3] = useState(0);

  const NextSlideBtn = () => {
    SetBtnSlide((prev) => (prev == 3 ? 0 : prev + 1));
  };
  const PreviousSlideBtn = () => {
    SetBtnSlide((prev) => (prev == 0 ? 3 : prev - 1));
  };
  console.log("btnSlide", btnSlide);

  useEffect(() => {
    SetSlide1(btnSlide == 3 ? 0 : btnSlide + 1);
    SetSlide2(slide1 == 3 ? 0 : slide1 + 1);
    SetSlide3(slide2 == 3 ? 0 : slide2 + 1);
  }, [btnSlide, slide1, slide2]);
  useEffect(() => {
    AOS.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="w-full mt-[5.75rem] lg:mt-[9.06rem] relative lg:static lg:flex justify-between select-none overflow-hidden">
      <div
        data-aos="fade-up"
        className="w-full lg:pt-[6.56rem] px-[0.62rem] lg:px-0"
      >
        <TitleComponent
          title="Khách hàng của BaaBaby"
          className=" lg:w-[33.75rem] text-justify"
        >
          <span className="font-normal">
            Khách hàng của Baa Baby có thể bao gồm các bậc cha mẹ, gia đình và
            người chăm sóc trẻ em, đặc biệt là những người quan tâm đến chất
            lượng và an toàn của sản phẩm chăm sóc trẻ sơ sinh và trẻ nhỏ.
          </span>
        </TitleComponent>
        {/* <SwiperComponent></SwiperComponent> */}
        {/* mobile */}
        <div className="flex space-x-[0.88rem] sm:space-x-[0.75rem] -ml-[2.7rem] sm:ml-0 items-end mt-[1.5rem] lg:hidden">
          <div className="flex-shrink-0 hidden sm:inline-block">
            <Image
              src={SlideSection2_2}
              alt="SlideSection2_4"
              className="w-[6.809rem] h-[8.49969rem] mb-[2.5rem]"
            ></Image>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={SlideSection2_3}
              alt="SlideSection2_4"
              className="w-[6.809rem] h-[8.49969rem] mb-[2.5rem]"
            ></Image>
          </div>
          <div className="flex-shrink-0 relative">
            <Image
              src={SlideSection2_4}
              alt="SlideSection2_4"
              className="w-[17.02463rem] h-[21.21606rem]"
            ></Image>
            <PriceItem className="w-[12.1105rem] h-[6rem] bottom-[4.53rem] right-[0.54rem] "></PriceItem>
          </div>
        </div>

        <div className="lg:flex items-center space-x-[1.92rem] mt-[6.04rem] hidden">
          {imgData.map((item, index) => {
            if (slide1 == index) {
              return (
                <Image
                  key={index}
                  src={item.img}
                  alt="SlideSection2_1"
                  className={cssItemImg}
                ></Image>
              );
            }
          })}
          {imgData.map((item, index) => {
            if (slide2 == index) {
              return (
                <Image
                  key={index}
                  src={item.img}
                  alt="SlideSection2_1"
                  className={cssItemImg}
                ></Image>
              );
            }
          })}
          {imgData.map((item, index) => {
            if (slide3 == index) {
              return (
                <Image
                  key={index}
                  src={item.img}
                  alt="SlideSection2_1"
                  className={`${cssItemImg} transition-all duration-500`}
                ></Image>
              );
            }
          })}
          {/* <Image
            src={SlideSection2_1}
            alt="SlideSection2_1"
            className={cssItemImg}
          ></Image> */}
          {/* <Image
            src={SlideSection2_2}
            alt="SlideSection2_2"
            className={cssItemImg}
          ></Image> */}
          {/* <Image
            src={SlideSection2_3}
            alt="SlideSection2_3"
            className={cssItemImg}
          ></Image> */}
        </div>
        <div className="lg:flex justify-center space-x-[0.5rem] mt-[1.26rem] hidden">
          <button
            type="button"
            onClick={NextSlideBtn}
            className="active:scale-90"
          >
            <Arrow_right_light className="rotate-180"></Arrow_right_light>
          </button>
          <button
            type="button"
            onClick={PreviousSlideBtn}
            className="active:scale-90"
          >
            <Arrow_right_light></Arrow_right_light>
          </button>
        </div>
      </div>
      <div data-aos="fade-left" className="relative hidden lg:block">
        <div className="w-[37.156rem] h-[46.30375rem] overflow-hidden ">
          {bigSlideData.map((item, index) => {
            if (btnSlide == index) {
              return (
                <Image
                  key={index}
                  src={item.img}
                  alt="SlideSection2_4"
                  className="w-full"
                ></Image>
              );
            }
          })}
        </div>
        <PriceItem></PriceItem>
      </div>
    </section>
  );
};
export function PriceItem({
  className = "w-[17.73425rem] h-[8.78619rem] top-[9.72rem] right-[2.03rem]",
}) {
  return (
    <div
      className={`${className} bg-white/50 absolute  rounded-[0.5rem] lg:rounded-[1rem] backdrop-blur-[3.25px] py-[0.95rem] px-[0.75rem] lg:px-[1.07rem]`}
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
export default Section2Slide;
