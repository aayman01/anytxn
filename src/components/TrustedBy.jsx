"use client";
import CountUp from "react-countup";

const TrustedBy = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h6
        style={{ color: "rgb(31, 128, 240)" }}
        className="text-center pb-6 lg:pb-8 font-bold tracking-[.2rem] uppercase"
      >
        TRUSTED BY THE BEST
      </h6>
      <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28 mb-5 ">
        <div
          className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b"
          style={{ color: "rgb(31, 128, 240)" }}
        >
          <h2 className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none bg-clip-text mb-2">
            {">"}
            <CountUp end={20} />
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Years of Experience
          </p>
        </div>
        <div className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b">
          <h2
            className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none bg-clip-text"
            style={{ color: "rgb(31, 128, 240)" }}
          >
            {"+"}
            <CountUp end={40} />
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center lg:text-lg lg:mt-[19px]">
            Financial Institutions
          </p>
        </div>
        <div className="flex items-center border-dashed border-[#0057BB70] max-lg:justify-between lg:flex-col max-lg:border-b">
          <h2
            className="max-[280px]:text-[30px] text-[64px] lg:text-[96px] tracking-[-0.02em] font-semibold leading-none text-[#0057BB] text-transparent bg-clip-text"
            style={{ color: "rgb(31, 128, 240)" }}
          >
            {">"}
            <CountUp end={200} />
            <span>m</span>
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
