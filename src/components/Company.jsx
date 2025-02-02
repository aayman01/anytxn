"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Company = () => {
  const companies = [
    { src: "/assets/companys/c1.webp", name: "Bank of Chendge" },
    { src: "/assets/companys/c2.webp", name: "Bank of China" },
    { src: "/assets/companys/c3.webp", name: "Bank of Sahanghal" },
    { src: "/assets/companys/c4.webp", name: "CGB" },
    { src: "/assets/companys/c5.webp", name: "China Citic Bank" },
    { src: "/assets/companys/c6.webp", name: "ON Bank" },
    { src: "/assets/companys/c7.webp", name: "PING AN Bank" },
    { src: "/assets/companys/c8.webp", name: "Postal Saving Bank" },
    { src: "/assets/companys/c9.webp", name: "SEA" },
    { src: "/assets/companys/c10.webp", name: "Shanghong Commercial Bank" },
    { src: "/assets/companys/c11.webp", name: "VipFubon Consumer Bank" },
    { src: "/assets/companys/c12.webp", name: "Xiamen International Bank" },
    { src: "/assets/companys/c13.webp", name: "Xm" },
    { src: "/assets/companys/c14.webp", name: "SPD Bank" },
    { src: "/assets/companys/c15.webp", name: "Card Center" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mb-10">
      {/* Desktop Grid */}
      <div className="mt-28 grid md:grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5">
        {companies.map((company, index) => (
          <picture 
            key={index} 
            className="flex items-center justify-center"
            title={company.name}
          >
            <Image
              src={company.src}
              alt={company.name}
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
                  src={company.src}
                  alt={company.name}
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
