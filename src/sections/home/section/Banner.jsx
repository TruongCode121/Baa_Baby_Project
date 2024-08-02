"use client";
import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import React from "react";
import { BannerSectionScreen } from "../../../../public";

const Banner = () => {
  // const refBanner = handleUseScrollTrigger(0, 0, 0, 0, 0.7, 0.7, 1);
  return (
    <section className="lg:w-[72.25rem] h-[12.9375rem] sm:h-full lg:h-[43.9375rem] p-[0.5rem] lg:p-[1rem]  mx-auto mt-[1.44rem] sm:mt-[3rem] lg:mt-[6.25rem]  rounded-[0.5rem] lg:rounded-[1.5rem] bg-white ">
      <div
        // ref={refBanner}
        className="w-full h-full overflow-hidden shadow_img_banner"
      >
        <Image
          src={BannerSectionScreen}
          alt="BannerSection Screen"
          className="w-full object-cover rounded-[0.5rem] lg:rounded-[1rem] "
        ></Image>
      </div>
    </section>
  );
};

export default Banner;
