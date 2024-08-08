"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { BgBannerTopa } from "../../../../public";
const BannerTopIndex = () => {
  const titleBannerTopRef = handleUseScrollTrigger(0, 0, 200, 0, 1);
  return (
    <section className="h-[100vh] relative font-manrope -mb-[1px]">
      <div className="h-[calc(100vh_-_4rem)] lg:h-full lg:overflow-hidden">
        <Image
          src={BgBannerTopa}
          alt="BgBannerTop"
          className="w-full  h-[calc(100vh)] sm:h-[100vh] lg:h-[100vh] flex flex-shrink-0 xl:h-auto object-cover  "
          priority
        ></Image>
      </div>
      <div className="over_bannerTop_mobie lg:over_bannerTop"></div>

      <div className="px-[0.62rem] lg:px-0 lg:w-auto absolute top-[38%] sm:top-[35%] lg:top-auto lg:bottom-[4.31rem] lg:left-[6.25rem] transition-all duration-700">
        <div
          ref={titleBannerTopRef}
          className="lg:flex items-center lg:space-x-[9.12rem]"
        >
          <h1
            className=" w-[22.1875rem] lg:w-[47.25rem] text-[2rem] lg:text-[4.6875rem] font-bold
          leading-[2.8125rem] lg:leading-[5.3125rem] tracking-[-0.03125rem] text-white"
          >
            BaaBaby - Thời trang dành cho trẻ em
          </h1>
          <div className="flex space-x-[3.5rem] lg:space-x-[6.93rem] mt-[2rem] sm:mt-[1rem] lg:mt-[1.13rem]">
            <div className="flex flex-col space-y-[1.94rem] sm:space-y-[1rem]">
              <div>
                <TitleItem>Khách hàng</TitleItem>
                <SubTitleItem className="whitespace-nowrap">
                  Thời trang Baa Baby
                </SubTitleItem>
              </div>
              <div>
                <TitleItem>Thời gian</TitleItem>
                <SubTitleItem>11/09/2021</SubTitleItem>
              </div>
            </div>
            <div className="flex flex-col space-y-[1.94rem] sm:space-y-[1rem]">
              <div>
                <TitleItem>Dịch vụ</TitleItem>
                <SubTitleItem>UI/UX Design</SubTitleItem>
              </div>
              <div>
                <TitleItem>Thành viên</TitleItem>
                <SubTitleItem>Loan Hoàng</SubTitleItem>
                <SubTitleItem>Hương Nguyễn</SubTitleItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export function TitleItem({ className, children }) {
  return (
    <div
      className={`${className} font-manrope text-[0.75rem] lg:text-[1rem] font-semibold leading-[1.5rem] uppercase opacity-70 text-white`}
    >
      {children}
    </div>
  );
}
export function SubTitleItem({ className, children }) {
  return (
    <div
      className={`${className} font-manrope text-[0.875rem] lg:text-[1rem] font-semibold leading-[1.5rem] text-white`}
    >
      {children}
    </div>
  );
}
export default BannerTopIndex;
