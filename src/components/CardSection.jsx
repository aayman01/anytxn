'use client';

import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


const CardSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 445 });
    const isTablet = useMediaQuery({ minWidth: 445, maxWidth: 768 });

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
      <div className={`h-full space-y-4 ${isTablet ? 'md:space-y-5' : 'md:space-y-6'} bg-[#F8FCFF] rounded-[20px] p-6 md:p-8`}>
        <div className="w-fit rounded-full">
          <Image
            src={card.image}
            width="50"
            height="50"
            sizes="50px"
            alt={card.title}
            className={`h-[32px] w-full ${
              isTablet ? 'md:h-[40px] md:w-[40px]' : 'md:h-[50px] md:w-[50px]'
            }`}
            loading="lazy"
          />
        </div>
        <h4 className={`font-Montserrat text-[#0B305B] font-semibold ${
          isMobile ? 'text-[18px]' : isTablet ? 'text-[20px]' : 'text-head-4'
        }`}>
          {card.title}
        </h4>
        <p className={`text-[#0B305B] ${
          isMobile ? 'text-[14px]' : 'text-[15px]'
        } leading-relaxed`}>
          {card.description}
        </p>
      </div>
    );
    
    return (
      <div className={`grid ${
        isMobile ? 'grid-cols-1' : isTablet ? 'md:grid-cols-2' : 'lg:grid-cols-3'
      } gap-5 md:gap-6 lg:gap-[30px] mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16 px-4 md:px-6 lg:px-8`}>
        {cards.map((card, index) => (
          <CardContent key={index} card={card} />
        ))}
      </div>
    );
};

export default CardSection;