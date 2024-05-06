"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import sofaImage from "@/../public/images/banner_sofa.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="flex pl-[6.187rem] pr-[4.81rem] text-white relative">
      <div className="w-[542px] h-[150px] pt-[200px]">
        <h1 className="text-[45px] font-semibold">
          Transform your <br /> space with elegance.
        </h1>
        <div className="pt-[83px] flex gap-x-[14px]">
          <button className="bg-yellow-400 rounded-[30px] text-black w-[160px] h-[50px] ">
            Shop Now
          </button>
          <button className="border border-white rounded-[30px] text-black w-[160px] h-[50px] ">
            Explore
          </button>
        </div>
      </div>

      <div className="absolute top-48 right-14 ">
        <Image
          className=""
          src={"/images/Dotted.png"}
          alt=""
          height={176}
          width={260}
        />
      </div>

      <div data-aos="fade-up" className="z-10 mt-[130px]">
        <Image
          src={sofaImage}
          height={581}
          width={810}
          className=""
          alt="sofa"
        />
      </div>
    </div>
  );
};

export default Banner;
