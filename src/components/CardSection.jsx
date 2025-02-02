'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Custom hook for media query
const useMediaQuery = (maxWidth) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const updateMatch = (e) => setMatches(e.matches);
    
    // Initial check
    setMatches(media.matches);
    
    // Add listener
    media.addEventListener('change', updateMatch);
    
    // Cleanup
    return () => media.removeEventListener('change', updateMatch);
  }, [maxWidth]);

  return matches;
};

const CardSection = () => {
    const isMobile = useMediaQuery(745);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const cards = [
      {
        image: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format",
        title: "Full-suite solutions",
        description: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."
      },
      {
        image: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png",
        title: "Simplify the complex",
        description: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."
      },
      {
        image: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format",
        title: "Cutting-edge tech",
        description: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."
      }
    ];

    const CardContent = ({ card }) => (
      <div className="h-full space-y-6 bg-[#F8FCFF] rounded-[20px] p-8">
        <div className="w-fit rounded-full">
          <Image
            src={card.image}
            width="50"
            height="50"
            sizes="50px"
            alt={card.title}
            className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
            loading="lazy"
          />
        </div>
        <h4 className="font-Montserrat text-[#0B305B] font-semibold lg:text-head-4">
          {card.title}
        </h4>
        <p className="text-[#0B305B] text-[14px]">
          {card.description}
        </p>
      </div>
    );

    if (!mounted) return null;

    if (isMobile) {
      return (
        <div className="mt-16">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={false}
            className="mySwiper"
            style={{
              padding: '20px 50px',
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide 
                key={index}
                style={{
                  width: '280px',
                  height: 'auto'
                }}
              >
                <CardContent card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }

    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-16 mb-16">
        {cards.map((card, index) => (
          <CardContent key={index} card={card} />
        ))}
      </div>
    );
};

export default CardSection;