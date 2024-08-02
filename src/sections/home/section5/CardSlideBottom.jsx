"use client";

const CardSlideBottom = ({
  children,
  className = "w-[14.8rem] h-[10.9375rem] sm:w-[21rem] sm:h-[15rem] lg:w-[47.5rem] lg:h-[28.6875rem]",
}) => {
  return (
    <section
      className={`${className} bg-white rounded-[0.625rem] lg:rounded-[1.5rem] p-[0.5rem] lg:p-[1rem] cursor-grab`}
    >
      <div className="overflow-hidden h-full w-full rounded-[0.5rem] lg:rounded-[1rem] shadow_img_banner">
        {children}
      </div>
    </section>
  );
};

export default CardSlideBottom;
