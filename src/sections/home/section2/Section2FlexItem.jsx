"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import React from "react";
import {
  BgFlexItemSection2,
  Section2FlexItemImg1,
  Section3FlexItemImg2,
} from "../../../../public";
import TitleComponent from "../TitleComponent";

const Section2FlexItem = () => {
  const titleRefColor = handleUseScrollTrigger(0, 0, -100, 0, 1);
  const refChildrenColor = handleUseScrollTrigger(0, 0, 200, 0, 1);
  const ref4_1Grid = handleUseScrollTrigger(0, 0, -100, 0, 1);
  const ref4_2Grid = handleUseScrollTrigger(0, 0, -100, 0, 1);
  const ref4_3Grid = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const ref4_4Grid = handleUseScrollTrigger(0, 0, 100, 0, 1);
  return (
    <section className="relative mt-[5.25rem] lg:mt-[7.81rem] lg:flex items-center justify-between px-[0.62rem] lg:px-0">
      <div className="">
        <TitleComponent
          refTitle={titleRefColor}
          title="Color"
          textColor="lg:mb-[3rem]"
        ></TitleComponent>

        <TitleComponent
          refChildren={refChildrenColor}
          className="lg:w-[35.375rem] line-clamp-[12] text-justify lg:text-left"
        >
          <p className="lg:font-medium font-semibold text-[0.875rem] lg:text-[1rem] ">
            Baa Baby chọn sử dụng các màu sắc nhất định để tạo ra ấn tượng và
            truyền tải thông điệp của thương hiệu đến khách hàng
          </p>
          <p className="mt-[1rem] lg:mt-[1.5rem] mb-[1rem] leading-[1.125rem] lg:leading-[1.875rem] text-[0.75rem] lg:text-[1rem] ">
            <strong> Màu xanh:</strong> tượng trưng cho sự tươi mới, sự phát
            triển và sức khỏe, đặc biệt là trong việc chăm sóc trẻ em. Màu xanh
            cũng mang lại cảm giác bình yên, cân bằng và yêu thương.
          </p>
          <p className="text-[0.75rem] lg:text-[1rem]">
            <strong>Màu hồng:</strong> tượng trưng cho sự dịu dàng, tình yêu và
            sự yêu thương.
          </p>
        </TitleComponent>
      </div>
      <div className="flex mt-[1.5rem] lg:mt-0 justify-center">
        <div>
          <ItemGrid refGrid={ref4_1Grid}>
            <Image
              src={Section2FlexItemImg1}
              alt="Section2FlexItemImg1"
              className="w-full h-full"
            ></Image>
          </ItemGrid>
          <ItemGrid
            refGrid={ref4_2Grid}
            className="bg-[#F05F8D] flex items-center justify-center"
          >
            <span className="text-white">#F05F8D</span>
          </ItemGrid>
        </div>
        <div>
          <ItemGrid
            refGrid={ref4_3Grid}
            className="bg-[#DCECD2] flex items-center justify-center"
          >
            #DCECD2
          </ItemGrid>
          <ItemGrid refGrid={ref4_4Grid}>
            <Image
              src={Section3FlexItemImg2}
              alt="Section3FlexItemImg2"
              className="w-full h-full"
            ></Image>
          </ItemGrid>
        </div>
      </div>
    </section>
  );
};
export function ItemGrid({ children, className, refGrid }) {
  return (
    <div
      ref={refGrid}
      className={`w-[11.09375rem] lg:w-[23.7rem] h-[12.93794rem] lg:h-[27.6875rem] font-manrope text-[0.875rem] lg:text-[1.25rem] font-bold ${className}`}
    >
      {children}
    </div>
  );
}
export default Section2FlexItem;
