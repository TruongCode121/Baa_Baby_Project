"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  BannerFooter,
  BannerSectionScreen,
  QuoteFooter,
} from "../../../../public";
import TitleComponent from "../TitleComponent";

const FooterIndex = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="mt-[4.38rem] lg:mt-[7.52rem] relative">
      <div className="bg_gradient absolute top-0  w-full h-[21.125rem] lg:h-[33.75rem]"></div>
      <div className="px-[0.62rem] lg:container top-[4.38rem] relative">
        <div
          data-aos="fade-up"
          className="lg:flex items-center justify-between"
        >
          <TitleComponent
            title="Kết quả"
            textColor="text-white"
          ></TitleComponent>
          <TitleComponent className="lg:w-[43.8125rem]" textColor="text-white">
            <span className="text-[0.865rem] lg:text-base">
              Trang web được thiết kế hiện đại, dễ sử dụng và tối ưu hóa trải
              nghiệm khách hàng, giúp khách hàng tìm kiếm thông tin, sản phẩm và
              dịch vụ một cách nhanh chóng và thuận tiện.
            </span>
          </TitleComponent>
        </div>
        <div className="mt-[2.5rem] lg:mt-[5.16rem] lg:w-[72.25rem] h-[12.9375rem] sm:h-full lg:h-[43.9375rem] bg-white p-[0.5rem] lg:p-[1rem] mx-auto rounded-[0.5rem] lg:rounded-[1.5rem]">
          <div
            data-aos="zoom-in"
            className="w-full h-full overflow-hidden  rounded-[0.5rem] lg:rounded-[1rem] shadow_img_banner"
          >
            <Image
              src={BannerFooter}
              alt="Banner Footer"
              className="w-full -mt-[6rem] hidden lg:inline-block"
            ></Image>
            <Image
              src={BannerSectionScreen}
              alt="Banner Footer"
              className="w-full lg:hidden inline-block"
            ></Image>
          </div>
        </div>

        <div data-aos="fade-up">
          <QuoteFooter className="mt-[4.38rem] lg:mt-[8rem]"></QuoteFooter>
        </div>
        <div className="lg:ml-[4.5rem] font-manrope font-bold relative">
          <div
            data-aos="fade-right"
            className="size-[20.0625rem] sm:size-[15.0625rem] lg:size-[32.3125rem] flex-shrink-0 rounded-full 
          bg-[rgba(254,242,247,0.90)] absolute top-[2.2rem] lg:-top-[38%]
           -right-[63%] sm:-right-[30%] lg:-right-[33%]"
          ></div>
          <h4
            data-aos="fade-left"
            className="text-[1.5rem] lg:text-[2.3125rem] leading-[2.25rem] lg:leading-[3.75rem] lg:w-[54.9375rem] text-Loan-Baa-baa1 relative lg:static line-clamp-6"
          >
            Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. Baa Baby
            thực sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà
            OkHub mang lại cho chúng tôi.{" "}
          </h4>

          <div className="lg:flex lg:space-x-[8.31rem]">
            <div data-aos="fade-left" className="flex-shrink-0">
              <p className="leading-[1.875rem] text-[1rem] lg:text-[1.5rem] mt-[1rem] lg:mt-[2.5rem]">
                Mrs. Nguyễn Trang
              </p>
              <p className="text-[0.875rem] lg:text-[1.25rem] leading-[1.5rem] font-be_vietname_pro font-normal lg:mt-[0.62rem]">
                CEO Thời trang Baa Baby
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="leading-[11.25rem] font-black lg:leading-[21.5625rem] text-[7.5rem] 
            -ml-[11.5rem] sm:-ml-[3rem]
            lg:text-[14.375rem] text-[rgba(0,0,0,0.03)] lg:font-extrabold whitespace-nowrap tracking-[0.03594rem]"
            >
              BAA BABY
            </div>
          </div>
        </div>
      </div>

      <div className="h-[7rem] lg:h-[15rem]"></div>
    </section>
  );
};

export default FooterIndex;
