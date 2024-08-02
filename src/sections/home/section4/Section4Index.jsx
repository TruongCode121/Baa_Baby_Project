"use client";

import Image from "next/image";
import { grid_mobile, grid_PC } from "../../../../public";
import TitleComponent from "../TitleComponent";

const Section4Index = () => {
  return (
    <section>
      <div className="px-[0.62rem] lg:px-0 lg:container mt-[7.53rem]">
        <div className=" lg:flex justify-between items-center">
          <TitleComponent title="Grid"></TitleComponent>
          <TitleComponent className="lg:w-[35.375rem] text-justify lg:text-left text-[0.865rem] lg:text-[1rem]">
            <span className=" leading-[1.3125rem] lg:leading-[1.875rem] ">
              Grid này cụ thể hoá việc sắp xếp các cột theo kích thước PC 1600px
              và 12 colum, Mobile 414px và 4 colum.
            </span>
          </TitleComponent>
        </div>
        <div className="lg:flex lg:space-x-[6.25rem] mt-[2.34rem]">
          <Image
            src={grid_PC}
            alt="grid PC"
            className="w-[21.8125rem] h-[13.80163rem] sm:w-full sm:h-full lg:w-[59.5625rem] lg:h-[43.43744rem] mx-auto lg:mx-0"
          ></Image>
          <Image
            src={grid_mobile}
            alt="grid mobie"
            className="w-[11.75rem] h-[23.42169rem] sm:w-1/2 sm:h-full lg:w-[18.875rem] lg:h-[43.4375rem] mx-auto lg:mx-0"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Section4Index;
