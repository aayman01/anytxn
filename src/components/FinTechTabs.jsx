"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const FinTechTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 748); // Mobile: Below 748px
      setTablet(width >= 748 && width < 1024); // Tablet: 748px - 1023px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const tabs = [
    {
      title: "Customer focused",
      heading: "Purpose-built financial services",
      description: `
        Elevate customer experience and achieve agile financial product
        innovation with the world's first, consumer-centric, real-time transaction
        account processing and credit limit system. 
      `,
      description2: `
        Experience the advantages of integrated retail financial services technology, real-time analysis of
        transactional behavior and product marketing opportunities.
      `,
      image: "/assets/fintech/budget-tracking.avif",
    },
    {
      title: "Agile and adaptable",
      heading: "Agile and adaptable for growth",
      description: `
        Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.
      `,
      description2: `
        Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.
      `,
      image: "/assets/fintech/investment-insights.avif",
    },
    {
      title: "Compliance ready",
      heading: "Manage compliance with ease",
      description: `
        Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.
      `,
      description2: `
        Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.
      `,
      image: "/assets/fintech/person.avif",
    },
    {
      title: "Secure and safe",
      heading: "Unparalleled Security",
      description: `
        Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.
      `,
      description2: `
        Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.
      `,
      image: "/assets/fintech/product.avif",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-[#1F80F0] uppercase tracking-wide text-lg font-bold">
            Technology Built for You
          </h1>
          <h2 className="text-[#0A2A4A] text-4xl font-bold mt-4">
            The Future of Finance
          </h2>
        </div>

        {/* Tabs Section - Hidden on Mobile/Tablets */}
        {!isMobile && !isTablet && (
          <div className="flex flex-wrap justify-center gap-5 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-5 py-3 rounded-full text-lg font-semibold transition-colors ${
                  activeTab === index
                    ? "bg-[#1F80F0] text-white"
                    : " text-[#1F80F0] hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        )}

        {/* Swiper Section */}
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          allowTouchMove={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={index}>
              <div
                className={`grid gap-8 items-center p-4 lg:p-12 bg-slate-50 rounded-xl ${
                  isMobile || isTablet
                    ? "grid-cols-1"
                    : "md:grid-cols-2 md:gap-8"
                }`}
              >
                <div>
                  <h3 className="text-[#1F80F0] font-bold text-lg tracking-[.2rem] mb-6">
                    {tab.title}
                  </h3>
                  <h2 className="text-[#0A2A4A] text-2xl md:text-3xl font-bold mt-3 mb-6">
                    {tab.heading}
                  </h2>
                  {isMobile && (
                    <Image
                      src={tab.image}
                      alt={tab.heading}
                      className="w-full rounded-lg mb-4"
                      width={315}
                      height={150}
                    />
                  )}
                  <p className="text-[#0A2A4A] text-[20px] sm:text-[15px] leading-[170%] font-semibold">
                    {tab.description}
                  </p>
                  <br />
                  <p className="text-[#0A2A4A] text-[14px] sm:text-[15px] leading-[160%] font-medium">
                    {tab.description2}
                  </p>
                  {isTablet && (
                    <Image
                      src={tab.image}
                      alt={tab.heading}
                      className="w-full rounded-lg mt-5 my-4"
                      width={315}
                      height={150}
                    />
                  )}
                </div>
                {!isMobile && !isTablet && (
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={tab.image}
                      alt={tab.heading}
                      className="w-full h-[350px] object-cover md:h-[425px]"
                      width={370}
                      height={350}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FinTechTabs;
