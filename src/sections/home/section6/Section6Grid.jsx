"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";
import Image from "next/image";
import {
  Section6Grid1,
  Section6Grid2,
  Section6Grid3,
  Section6Grid4,
  Section6Grid5,
} from "../../../../public";

const Section6Grid = () => {
  const refGrid1_sec6 = handleUseScrollTrigger(0, 0, 0, 0, 1.8, 0.7, 1);
  const refGrid2_sec6 = handleUseScrollTrigger(0, 0, 0, 0, 1.5, 0.7, 1);
  const refGrid3_sec6 = handleUseScrollTrigger(0, 0, 0, 0, 0.7, 0.5, 1);
  const refGrid4_sec6 = handleUseScrollTrigger(0, 0, 0, 0, 1, 0.5, 1);
  const refGrid5_sec6 = handleUseScrollTrigger(0, 0, 0, 0, 1.2, 0.5, 1);
  return (
    <div className="lg:w-[71.5625rem] grid grid-cols-4 gap-[0.5rem] lg:gap-[1.44rem] ">
      <div className="row-span-2 col-span-2">
        <Image
          ref={refGrid1_sec6}
          src={Section6Grid1}
          alt="Section6 Grid1"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="">
        <Image
          ref={refGrid2_sec6}
          src={Section6Grid2}
          alt="Section6 Grid2"
          className="w-full h-full"
        ></Image>
      </div>
      <div>
        <Image
          ref={refGrid3_sec6}
          src={Section6Grid3}
          alt="Section6 Grid3"
          className="w-full h-full"
        ></Image>
      </div>
      <div>
        <Image
          ref={refGrid4_sec6}
          src={Section6Grid4}
          alt="Section6 Grid4"
          className="w-full h-full"
        ></Image>
      </div>
      <div>
        <Image
          ref={refGrid5_sec6}
          src={Section6Grid5}
          alt="Section6 Grid5"
          className="w-full h-full"
        ></Image>
      </div>
    </div>
  );
};

export default Section6Grid;
