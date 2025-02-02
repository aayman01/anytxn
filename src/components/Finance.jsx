import ImageSection from "./ImageSection";

const Finance = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-40">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6 relative">
        {/* Top Section */}
        <div className="order-1 md:col-span-1 space-y-6">
          <h2 className="text-[#1F80F0] font-bold text-xm tracking-[.2rem] mb-4">
            POWERING THE FUTURE OF FINANCE
          </h2>
          <h1 className="text-[#0A2A4A] text-[32px] sm:text-[40px] md:text-[56px] leading-[110%] font-semibold">
            Uncovering new ways to delight customers
          </h1>
        </div>

        {/* Image Section */}
        <div className="order-2 md:row-span-2 md:col-start-2 flex justify-center items-center !my-[60px] md:!my-0">
          <ImageSection />
        </div>

        {/* Bottom Text Section */}
        <div className="order-3 md:col-span-1 space-y-6 md:-mt-4">
          <p className="text-[#0A2A4A] text-[14px] sm:text-[15px] leading-[170%] font-medium">
            <strong>
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </strong>
          </p>
          <p className="text-[#0A2A4A] text-[14px] sm:text-[15px] leading-[160%] font-medium">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Finance;
