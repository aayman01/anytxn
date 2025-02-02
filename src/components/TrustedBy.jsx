"use client";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TrustedBy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="max-w-6xl mx-auto px-4" ref={ref}>
      <h6
        style={{ color: "rgb(31, 128, 240)" }}
        className="text-center pb-6 lg:pb-8 font-bold tracking-[.2rem] uppercase"
      >
        TRUSTED BY THE BEST
      </h6>
      <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28 mb-5">
        <div
          className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b"
          style={{ color: "rgb(31, 128, 240)" }}
        >
          <h2 className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none bg-clip-text mb-2">
            {">"}
            {isInView ? (
              <CountUp end={20} duration={2} />
            ) : "0"}
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Years of Experience
          </p>
        </div>
        <div className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b">
          <h2
            className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none bg-clip-text mb-2"
            style={{ color: "rgb(31, 128, 240)" }}
          >
            {isInView ? (
              <>
                <CountUp end={40} duration={2} />
                {"+"}
              </>
            ) : "0+"}
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
            Financial Institutions
          </p>
        </div>
        <div className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b">
          <h2
            className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none text-[#0057BB] bg-clip-text mb-2"
            style={{ color: "rgb(31, 128, 240)" }}
          >
            {">"}
            {isInView ? (
              <>
                <CountUp end={200} duration={2} />
                <span>m</span>
              </>
            ) : "0m"}
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Customers Each
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
