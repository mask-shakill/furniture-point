import Image from "next/image";
import React from "react";
import sofaImage from "@/../public/images/banner_sofa.png";
const Banner = () => {
  return (
    <div className="flex pl-[6.187rem] pr-[4.81rem] text-white">
      <div className="w-[542px] h-[150px] pt-[200px]">
        <h1 className="text-[45px] font-semibold">
          "Transform your <br /> space with elegance."
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

      <div className="w-[810px] h-[581px] pt-[120px]">
        <Image src={sofaImage} className="" alt="sofa"></Image>
      </div>
    </div>
  );
};

export default Banner;
