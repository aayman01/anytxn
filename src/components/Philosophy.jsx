import React from 'react';
import Image from 'next/image';
const Philosophy = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col  overflow-x-hidden">
        <h1 className="font-bold text-base text-[#1f80f0] montserrat-font leading-6 text-center ">
          OUR PHILOSOPHY
        </h1>
        <p className="font-semibold text-[56px] leading-[62px] text-[#0b305b] mt-3 text-center md:w-[550px] mb-10 lg:w-full xs:w-full">
          Human-centred innovation
        </p>
        <div className="max-w-7xl mx-auto mt-10">
          <Image
            src={"/assets/Philosophy/philosophy.webp"}
            className="w-full hidden lg:block"
            alt="Philosophy Image"
            width={1200}
            height={1200}
          />
          <Image
            src={"/assets/Philosophy/p2.png"}
            className="w-[417px] h-[480px] block lg:hidden"
            alt="Philosophy Image"
            width={417}
            height={480}
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;