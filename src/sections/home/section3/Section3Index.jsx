"use client";

import Hero from "./Hero";

const Section3Index = () => {
  return (
    <section className="relative mt-[7.5rem]">
      <div className="w-full h-[42rem] px-[0.62rem] lg:px-0 lg:h-[53.125rem] bg_section3 relative">
        <Hero></Hero>
        <TextBackgroundItem className="top-[17.31rem] lg:top-[5.31rem] left-[4.31rem] lg:left-auto lg:right-[0.69rem]"></TextBackgroundItem>
        <TextBackgroundItem className="bottom-[5.38rem] left-[0.62rem] lg:left-auto lg:right-[2.06rem]">
          graphy
        </TextBackgroundItem>
      </div>
    </section>
  );
};
export function TextBackgroundItem({ children = "Typo", className }) {
  return (
    <div
      className={`${className} absolute text-[7.5rem] lg:text-[14.375rem] leading-[7.5rem] lg:leading-[21.5625rem] tracking-[0.6rem] lg:tracking-[1.15rem]  font-black text-[rgba(255,255,255,0.10)]  opacity-50`}
    >
      {children}
    </div>
  );
}
export default Section3Index;
