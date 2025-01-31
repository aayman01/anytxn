"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundTransform = `translate3d(0%, ${-5 + (scrollY * 0.01)}%, 0px)`;

  return (
    <div className="md:block relative h-fit lg:text-clip">
      <figure
        className="w-[75%] mx-auto"
        style={{
          boxShadow: "0px 23px 30px 0px #16437763",
        }}
      >
        <Image
          src="/assets/finance/lady.avif"
          width={430}
          height={520}
          alt="POWERING THE FUTURE OF FINANCE"
          className="object-cover w-full h-full"
          sizes="(min-width: 1024px) 45vw, 95vw"
          loading="lazy"
        />
      </figure>
      <div>
        {/* background svg */}
        <figure
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            transform: backgroundTransform,
            transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
            willChange: "transform",
          }}
        >
          <Image
            src="/assets/finance/background.svg"
            alt="background frame"
            className="object-cover w-full h-full overflow-visible"
            loading="lazy"
            width={1124}
            height={1364}
          />
        </figure>
        {/* lady front image */}
        <figure
          className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
          style={{
            transform: "translate3d(0%, 2%, 0px)",
            transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <Image
            src="/assets/finance/foreground.png"
            alt="foreground frame"
            className="object-cover w-full h-full overflow-visible"
            loading="lazy"
            width={1124}
            height={1364}
          />
        </figure>
        {/* chart icon */}
        <figure className="absolute top-[20%] left-[6%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl animate-float">
          <Image
            src="/assets/finance/chart.svg"
            width={74}  
            height={75}
            alt="anycaas"
            sizes="73px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
        {/* bank icon */}
        <figure className="absolute top-[10%] right-2 translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl animate-float delay-float-1">
          <Image
            src="/assets/finance/bank.svg"
            width={116}
            height={115}
            alt="anybass"
            sizes="115px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
        {/* graph icon */}
        <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl animate-float delay-float-2">
          <Image
            src="/assets/finance/graph.svg"
            width={89}
            height={88}
            alt="anypass"
            sizes="87px"
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  );
};

export default ImageSection;
