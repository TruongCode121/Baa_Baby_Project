"use client";

import handleUseScrollTrigger from "@/hooks/useScrollTriggerFromTo";

const Hero = () => {
  const refHero1_Section3 = handleUseScrollTrigger(0, 0, 0, 0, 2);
  const refHero2_Section3 = handleUseScrollTrigger(0, 0, 0, 0, 2);
  const refHero3_Section3 = handleUseScrollTrigger(0, 0, 0, 0, 1);
  const refHero4_Section3 = handleUseScrollTrigger(0, 0, 0, 0, 1.5);
  const refHero5_Section3 = handleUseScrollTrigger(0, 0, 0, 0, 2);

  return (
    <section className="text-white absolute top-[3.12rem] lg:top-[17.56rem] lg:left-[6.25rem]">
      <div className="lg:flex items-start lg:space-x-[3.81rem]">
        <div>
          <h2
            ref={refHero1_Section3}
            className="text-[7.5rem] lg:text-[11.25rem] leading-normal lg:leading-[11.25rem] font-extrabold"
          >
            Aa
          </h2>
          <h2
            ref={refHero2_Section3}
            className="text-[3.125rem] lg:text-[5.625rem] leading-normal font-bold lg:-mt-[1.25rem]"
          >
            Manrope
          </h2>
        </div>
        <div className="mt-[3.75rem] lg:mt-0 text-[1.5rem] sm:text-[1.4rem] lg:text-[2.8125rem] font-medium leading-normal pr-[1rem] sm:pr-0">
          <p
            ref={refHero3_Section3}
            className="uppercase opacity-100 font-bold mb-[1rem] lg:mb-[2.38rem]"
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </p>
          <p
            ref={refHero4_Section3}
            className="lowercase opacity-70 mb-[1.5rem] lg:mb-[2.38rem]"
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </p>
          <p ref={refHero5_Section3} className="opacity-70">
            1 2 3 4 5 6 7 8 9 0
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
