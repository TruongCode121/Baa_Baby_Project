"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import { Section2FlexLeftImg, Section2FlexRightImg } from "../../../../public";

const Section2FlexImg = () => {
  const refItemLeft = handleUseScrollTrigger(-200, 0, 0, 0, 1);
  const refItemRight = handleUseScrollTrigger(200, 0, 0, 0, 1);
  return (
    <section className="flex mt-[1.5rem] lg:mt-[5.62rem]">
      <div className="w-1/2">
        <Image
          ref={refItemLeft}
          src={Section2FlexLeftImg}
          alt="Section2FlexLeftImg"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="w-1/2">
        <Image
          ref={refItemRight}
          src={Section2FlexRightImg}
          alt="Section2FlexRightImg"
          className="w-full h-full"
        ></Image>
      </div>
    </section>
  );
};

export default Section2FlexImg;
