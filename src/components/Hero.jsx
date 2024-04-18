import React from "react";

const Hero = () => {
  return (
    <section className="py-[72px] max-md:pb-[30px] max-md:pt-[15px]">
      <div className="hidden max-sm:block text-gray-300 text-sm mb-3 p-2">
        HOME <span className="mx-2">|</span>{" "}
        <span className="text-black">SHOP</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-2">
        <h3 className="text-[60px] max-lg:text-[48px] max-md:text-[36px] max-sm:text-[24px] font-normal text-center">
          DISCOVER OUR PRODUCTS
        </h3>
        <p className="text-center text-[22px] max-md:text-[16px] max-lg:text-lg max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </section>
  );
};

export default Hero;
