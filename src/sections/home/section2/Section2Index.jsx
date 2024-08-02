"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { BgFlexItemSection2 } from "../../../../public";
import TitleComponent from "../TitleComponent";
import BannerSection2 from "./BannerSection2";
import BannerSection2_1 from "./BannerSection2_1";
import Section2FlexImg from "./Section2FlexImg";
import Section2FlexItem from "./Section2FlexItem";
import Section2Slide from "./Section2Slide";

const Section2Index = () => {
  const titleRefVitri = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  const refChildrenThuongHieu = handleUseScrollTrigger(200, 0, 0, 0, 1);
  const refCircleSec2 = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  return (
    <section className="w-full">
      <BannerSection2></BannerSection2>
      <div className="lg:container ">
        <Section2Slide></Section2Slide>
        <div className="relative">
          <div
            ref={refCircleSec2}
            className="size-[17.25rem] lg:size-[34.3125rem] rounded-full absolute -bottom-[5rem] lg:bottom-[5.13rem] -left-[calc(28.33334%_+_1.8rem)] bg-[#FEF2F7] "
          ></div>
          <BannerSection2_1></BannerSection2_1>
        </div>
        <div className="px-[0.62rem] lg:px-0 lg:flex justify-between items-center mt-[8.06rem]">
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
