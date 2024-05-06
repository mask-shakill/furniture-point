"use client";
import React, { useEffect } from "react";
import ExcellentProduct from "../Card/ExcellentProduct";
import AOS from "aos";
import "aos/dist/aos.css";

function ExcellentProducts() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
    });
  }, []);

  return (
    <div
      className="mt-[180px] ml-[99px] mr-[97px] grid grid-cols-4 gap-x-7"
      data-aos="fade-up" // Add data-aos attribute here
    >
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
