"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { BannerImgSection2_1 } from "../../../../public";
import TitleComponent from "../TitleComponent";

const BannerSection2_1 = () => {
  const refTitleSection2 = handleUseScrollTrigger(0, 0, 100, 0, 0.7);
  const refChildrenSection2 = handleUseScrollTrigger(0, 0, 150, 0, 0.7);
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="text-center mt-[7.51rem] relative">
      <TitleComponent
        refTitle={refTitleSection2}
        refChildren={refChildrenSection2}
        title="Nghành nghề kinh doanh"
        className="px-[1rem] lg:px-0 lg:w-[48rem]  text-center mx-auto"
      >
        Các đối thủ của Baa Baby trong lĩnh vực sản xuất và kinh doanh sản phẩm
        chăm sóc trẻ em và đồ dùng cho trẻ nhỏ có thể bao gồm các thương hiệu:
        NUK, Pampers, Mamypoko, Moony, Libero,..
      </TitleComponent>
      {/* <div className="w-[83rem] h-[20.35281rem] flex flex-shrink-0 ">
        <Image
          src={BannerImgSection2_1}
          alt="BannerImgSection2_1"
          className="w-full"
        ></Image>
      </div> */}
      <div
        data-aos="slide-up"
        className="relative mt-[1.5rem] lg:mt-[5.69rem] w-[43rem] h-[20.35281rem] lg:w-[72.625rem] lg:h-[34.375rem] flex flex-shrink-0 ml-[0.62rem] lg:ml-auto"
      >
        <Image
          src={BannerImgSection2_1}
          alt="BannerImgSection2_1"
          className="w-full h-full ml-auto "
        ></Image>
        <div className="w-[26.60669rem] h-[4.73669rem] lg:w-[44.9375rem] lg:h-[8rem] bg-white absolute bottom-[1.19rem] right-[3.5rem] lg:right-[5rem]"></div>
      </div>
    </section>
  );
};

export default BannerSection2_1;
