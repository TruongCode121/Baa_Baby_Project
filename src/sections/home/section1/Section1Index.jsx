"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { BgImgSection1, ImageBgSection1 } from "../../../../public";

const Section1Index = () => {
  const refFlexSection1 = handleUseScrollTrigger(0, 0, 0, 0, 0.3, 0.5, 1);
  const refFlexSection1_2 = handleUseScrollTrigger(0, 0, 0, 0, 0.6, 0.5, 1);
  const refFlexSection1_3 = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  const refFlexPcSection1 = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.7, 1, 1);
  const refTitleSection1 = handleUseScrollTrigger(0, 0, 100, 0, 1);
  return (
    <section className="h-[33.9375rem] lg:h-[53.125rem] w-full relative">
      <Image
        src={BgImgSection1}
        alt="BgImg Section1"
        className="w-full h-full hidden lg:inline-block "
      ></Image>
      <Image
        src={ImageBgSection1}
        alt="Image BgSection1"
        className="w-full h-full lg:hidden inline-block "
      ></Image>
      <div className="absolute top-[4.38rem] lg:top-[6.25rem] left-1/2 -translate-x-1/2">
        <div
          ref={refTitleSection1}
          className="text-center font-manrope text-[2.5rem] font-medium mb-[2.5rem] lg:mb-[4.31rem] text-white"
        >
          Mục tiêu dự án
        </div>
        <div className="flex lg:hidden">
          <ItemContent
            refContent={refFlexSection1}
            className="size-[11.5625rem] -mr-[1.5rem] px-[2.44rem]"
          >
            <span className="w-[6.625rem]">Tăng lượt truy cập</span>
          </ItemContent>
          <ItemContent
            refContent={refFlexSection1_2}
            className="size-[11.5625rem] px-[2rem]"
          >
            <span className="w-[7.5625rem]">
              Tăng giá trị trung bình đơn hàng
            </span>
          </ItemContent>
        </div>
        <ItemContent
          refContent={refFlexSection1_3}
          className="size-[11.5625rem] px-[2.38rem] mx-auto -mt-[3rem] lg:hidden"
        >
          <span className="w-[6.625rem]">Tỷ lệ chuyển đổi CTR tăng</span>
        </ItemContent>
        <div ref={refFlexPcSection1} className="hidden lg:flex items-center">
          <ItemContent className="size-[26.0625rem] -mr-[3rem] px-[6.06rem]">
            <span className="w-[13.9375rem]">Tăng lượt truy cập</span>
          </ItemContent>
          <ItemContent className="size-[31.625rem]  px-[8.06rem]">
            <span className="w-[18.125rem]">Tỷ lệ chuyển đổi CTR tăng</span>
          </ItemContent>
          <ItemContent className="size-[26.0625rem] -ml-[3rem] px-[5.06rem]">
            <span className="w-[15.5rem] ">
              Tăng giá trị trung bình đơn hàng
            </span>
          </ItemContent>
        </div>
      </div>
    </section>
  );
};
export function ItemContent({ className, children, refContent }) {
  return (
    <div
      ref={refContent}
      className={`${className} border-[1px] border-white rounded-full flex-shrink-0 flex items-center justify-center`}
    >
      <p className="font-manrope leading-[1.3125rem] lg:leading-[2.8125rem] text-center text-[0.875rem] lg:text-[2.25rem] font-bold text-white line-clamp-3">
        {children}
      </p>
    </div>
  );
}
export default Section1Index;
