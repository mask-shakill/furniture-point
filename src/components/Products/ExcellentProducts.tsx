import Image from "next/image";
import React from "react";
import ExcellentProduct from "../Card/ExcellentProduct";

function ExcellentProducts() {
  return (
    <div className="mt-[190px] ml-[99px] mr-[97px] grid grid-cols-4 gap-x-7">
      <div className=" col-span-1 h-[288px]">
        <h1 className="text-2xl font-semibold">
          Crafted with <br /> excellent <br /> material
        </h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          suscipit ipsam repudiandae quia. Doloremque eius unde cum accusantium.
        </p>
        <button className="bg-[#35736E] rounded-[20px] w-[160px] h-[45px] mt-5 text-white">
          Explore
        </button>
      </div>

      <ExcellentProduct />
    </div>
  );
}

export default ExcellentProducts;
