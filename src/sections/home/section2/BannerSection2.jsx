"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { BannerImgSection2 } from "../../../../public";
import TitleComponent from "../TitleComponent";

const BannerSection2 = () => {
  const refTitle3C = handleUseScrollTrigger(0, 0, 100, 0, 1);
  const refChildrenVs = handleUseScrollTrigger(0, 0, 150, 0, 1);
  const refBanerSection2 = handleUseScrollTrigger(0, 0, 150, 0, 1);

  return (
    <section className="text-center mt-[4.38rem] lg:mt-[7.5rem]">
      <TitleComponent
        refTitle={refTitle3C}
        refChildren={refChildrenVs}
        title={
          <p>
            3C Reseach{" "}
            <span className="hidden lg:inline">( Nghiên cứu khách hàng)</span>
          </p>
        }
        className="w-[19.5625rem] lg:w-[52.9375rem]  mx-auto"
      >
        Với sự phát triển của công nghệ và Internet, thị trường mua sắm trực
        tuyến tại Việt Nam đang có sự tăng trưởng mạnh mẽ. Các khách hàng ngày
        càng ưa thích việc mua sắm
      </TitleComponent>
      <div
        ref={refBanerSection2}
        className="mx-auto w-full h-[11.6875rem] lg:w-[76.375rem] lg:h-[40.1875rem] mt-[1.5rem] lg:mt-[2.81rem] px-[0.62rem] lg:px-0"
      >
        <Image
          src={BannerImgSection2}
          alt="BannerImgSection2"
          className="w-full h-full"
        ></Image>
      </div>
    </section>
  );
};

export default BannerSection2;
