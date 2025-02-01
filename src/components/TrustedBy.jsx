
const TrustedBy = () => {
    return (
      <section>
        <h6 class="text-center lg:pb-8 font-bold tracking-[.2rem] uppercase text-[#0057BB]">
          TRUSTED BY THE BEST
        </h6>
        <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28 mb-5">
          <div
            className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
            style={{ color: "rgb(31, 128, 240)" }}
          >
            <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-clip-text">
              {">"}
              <span>20</span>
            </h2>
            <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
              Years of Experience
            </p>
          </div>
          <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
            <h2
              className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-clip-text"
              style={{ color: "rgb(31, 128, 240)" }}
            >
              {"+"}
              <span>40</span>
            </h2>
            <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
              Financial Institutions
            </p>
          </div>
          <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
            <h2
              className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none text-[#0057BB] text-transparent bg-clip-text"
              style={{ color: "rgb(31, 128, 240)" }}
            >
              {">"}
              <span>20</span>
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