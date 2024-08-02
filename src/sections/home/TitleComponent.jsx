"use client";

const TitleComponent = ({
  textColor,
  refTitle,
  refChildren,
  title,
  children,
  className,
}) => {
  return (
    <section className={`font-manrope text-Loan-Baa-baa1 ${textColor}`}>
      <h2
        ref={refTitle}
        className="text-[1.5rem] lg:text-[2.8125rem] font-extrabold "
      >
        {title}
      </h2>
      <div
        ref={refChildren}
        className={`text-[0.875rem] lg:text-[1rem] leading-[1.3125rem] lg:leading-[1.625rem] font-medium mt-[1rem] ${className} line-clamp-5`}
      >
        {children}
      </div>
    </section>
  );
};

export default TitleComponent;
