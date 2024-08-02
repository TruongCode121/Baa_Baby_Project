"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import React from "react";
import {
  bgImgSection,
  SecionImgRight,
  SectionImgLeft,
} from "../../../../public";
import TitleComponent from "../TitleComponent";
import Banner from "./Banner";

const SectionIndex = () => {
  const titleBannerSectionRef = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const childrenSectionRef = handleUseScrollTrigger(0, 0, 200, 0, 1);
  const circleSectionRef = handleUseScrollTrigger(200, 0, 0, 0, 1);
  const flexLeftSectionRef = handleUseScrollTrigger(-400, 0, 0, 0, 1);
  const flexRightSectionRef = handleUseScrollTrigger(-200, 0, 0, 0, 1.5);
  return (
    <section className="relative">
      <div className="bg-Loan-Baa-Baa-baby w-full h-[8.0625rem] sm:h-[13rem] lg:h-[29.25rem]"></div>
      <div className="w-full h-[36.9375rem] lg:w-[54rem] sm:h-[40rem] lg:h-[80.625rem] bg-white lg:ml-auto sm:mt-[2rem] lg:mt-[8.01rem] relative lg:pl-[7px]">
        <Image
          src={bgImgSection}
          alt="bgImgSection"
          className="w-full h-full object-cover"
        ></Image>
        <div
          ref={circleSectionRef}
          className="size-[11.125rem] sm:size-[15rem] lg:size-[34.3125rem] rounded-full bg-Loan-Baa-bng-baa absolute -right-[20%] lg:-right-[43%] bottom-[-3rem] lg:top-[12%]"
        ></div>
      </div>

      <div className="w-full absolute top-0">
        <div className=" px-[0.62rem] lg:px-0 lg:container">
          <Banner></Banner>
          <div className="mb-[3.12rem] lg:mb-[11.63rem]"></div>
          <TitleComponent
            refTitle={titleBannerSectionRef}
            refChildren={childrenSectionRef}
            title="Bối cảnh"
            className="lg:w-[44.6875rem] text-justify lg:text-left"
          >
            <span className="line-clamp-[8]">
              Với sự phát triển của công nghệ và Internet, thị trường mua sắm
              trực tuyến tại Việt Nam đang có sự tăng trưởng mạnh mẽ. Các khách
              hàng ngày càng ưa thích việc mua sắm và thanh toán trực tuyến vì
              tính tiện lợi và nhanh chóng. Ngoài ra, sự phát triển của thị
              trường này cũng đồng nghĩa với việc tăng cường sự cạnh tranh giữa
              các công ty và thương hiệu trực tuyến.
            </span>
          </TitleComponent>
          <div className="flex space-x-[0.69rem] lg:space-x-[2.5rem] mt-[1.5rem] lg:mt-[3.12rem]">
            <Image
              ref={flexLeftSectionRef}
              src={SectionImgLeft}
              alt="SectionImgLeft"
              className="w-[11rem] h-[9.6875rem] sm:w-[50%] sm:h-[15rem] lg:w-[37.25rem] lg:h-[32.9375rem]"
              priority
            ></Image>
            <Image
              ref={flexRightSectionRef}
              src={SecionImgRight}
              alt="SecionImgRight"
              className="w-[8.25rem] h-[9.6875rem] sm:w-[40%] sm:h-[15rem] lg:w-[27.9375rem] lg:h-[33.0625rem]"
              priority
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIndex;
