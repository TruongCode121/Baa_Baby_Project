"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { BgFlexItemSection2 } from "../../../../public";
import TitleComponent from "../TitleComponent";
import BannerSection2 from "./BannerSection2";
import BannerSection2_1 from "./BannerSection2_1";
import Section2FlexImg from "./Section2FlexImg";
import Section2FlexItem from "./Section2FlexItem";
import ThumbsGallery from "./ThumbsGallery";

const Section2Index = () => {
  const titleRefVitri = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  const refChildrenThuongHieu = handleUseScrollTrigger(200, 0, 0, 0, 1);
  const refCircleSec2 = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  const refKhOfBaby = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const refContentKhOfBaby = handleUseScrollTrigger(0, 0, 150, 0, 1);
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);

  return (
    <section className="w-full">
      <BannerSection2></BannerSection2>
      <div className="lg:container ">
        <div className="relative  bg-[#FFFDFB] pb-[5rem] lg:pb-0">
          <div className="lg:absolute lg:top-[6.56rem] lg:mt-0 mt-[5.75rem] px-[0.62rem] lg:px-0 pt-[1.38rem]  lg:pt-0 ">
            <TitleComponent
              refTitle={refKhOfBaby}
              refChildren={refContentKhOfBaby}
              title="Khách hàng của BaaBaby"
              className=" lg:w-[33.75rem] text-justify"
            >
              <span className="font-normal">
                Khách hàng của Baa Baby có thể bao gồm các bậc cha mẹ, gia đình
                và người chăm sóc trẻ em, đặc biệt là những người quan tâm đến
                chất lượng và an toàn của sản phẩm chăm sóc trẻ sơ sinh và trẻ
                nhỏ.
              </span>
            </TitleComponent>
          </div>
          <ThumbsGallery></ThumbsGallery>
        </div>
        <div className="relative">
          <div
            ref={refCircleSec2}
            className="size-[17.25rem] lg:size-[34.3125rem] rounded-full absolute -bottom-[5rem] lg:bottom-[5.13rem]  -left-[calc(22.33334%_+_1.8rem)] lg:-left-[calc(28.33334%_+_1.8rem)] bg-[#FEF2F7] "
          ></div>
          <BannerSection2_1></BannerSection2_1>
        </div>
        <div className="px-[0.62rem] lg:px-0 lg:flex justify-between items-center lg:mt-[8.06rem] mt-[10.06rem]">
          <TitleComponent
            refTitle={titleRefVitri}
            title="Vị trí thương hiệu"
          ></TitleComponent>
          <TitleComponent
            refChildren={refChildrenThuongHieu}
            className="lg:w-[35.375rem]"
          >
            Thương hiệu thời trang trẻ em số 1 tại Việt Nam, tiên phong trong
            việc đặt lợi ích của khách hàng lên hàng đầu.
          </TitleComponent>
        </div>
      </div>
      <Section2FlexImg></Section2FlexImg>
      <div className="relative">
        <div className="absolute -top-[5rem] lg:-top-[2rem]  w-[23.4375rem] lg:w-[46.5rem] h-[35.6875rem] lg:h-[55.3125rem]">
          <Image
            src={BgFlexItemSection2}
            alt="BgFlexItemSection2"
            className="w-full h-full object-cover lg:object-fill"
          ></Image>
        </div>
        <div className="lg:container">
          <Section2FlexItem></Section2FlexItem>
        </div>
      </div>
    </section>
  );
};

export default Section2Index;
