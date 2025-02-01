"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Company = () => {
  const companies = [
    "/assets/companys/c1.webp",
    "/assets/companys/c2.webp",
    "/assets/companys/c3.webp",
    "/assets/companys/c4.webp",
    "/assets/companys/c5.webp",
    "/assets/companys/c6.webp",
    "/assets/companys/c7.webp",
    "/assets/companys/c8.webp",
    "/assets/companys/c9.webp",
    "/assets/companys/c10.webp",
    "/assets/companys/c11.webp",
    "/assets/companys/c12.webp",
    "/assets/companys/c13.webp",
    "/assets/companys/c14.webp",
    "/assets/companys/c15.webp",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mb-10">
      {/* Desktop Grid */}
      <div className="mt-28 grid md:grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5">
        {companies.map((company, index) => (
          <picture key={index} className="flex items-center justify-center">
            <Image
              src={company}
              alt={`company-${index + 1}`}
              width={176}
              height={121}
            />
          </picture>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden mt-16">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4">
                <Image
                  src={company}
                  alt={`company-${index + 1}`}
                  width={176}
                  height={121}
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Company;
