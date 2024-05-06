"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
    });
  }, []);

  return (
    <main className="ml-[99px] mr-[97px] mt-56">
      <section>
        <h1 className="font-semibold text-[34px]">Recently Blog</h1>
      </section>

      <section className="w-[1148px] h-[482px]">
        <div className="flex justify-end">
          <h1 className="border-b-2 border-slate-400 mr-2">View All Posts</h1>
        </div>
        <div
          className="w-[1140px] h-[344px] grid grid-cols-3 pt-6 gap-x-6"
          data-aos="fade-up"
        >
          <div data-aos="fade-right">
            <Image
              className="rounded-lg"
              src={"/images/post-1 1.png"}
              alt=""
              height={249}
              width={360}
            />
            <h1 className="font-semibold text-[18px] pt-[44px] pb-[5px]">
              First Time Home Owner Ideas
            </h1>
            <p>
              by <span className="font-semibold">Shakil</span> on{" "}
              <span className="font-semibold">Jan 15th, 2023</span>
            </p>
          </div>
          <div data-aos="fade-up">
            <Image
              className="rounded-lg"
              src={"/images/post-2 1.png"}
              alt=""
              height={249}
              width={360}
            />
            <h1 className="font-semibold text-[18px] pt-[44px] pb-[5px]">
              First Time Home Owner Ideas
            </h1>
            <p>
              by <span className="font-semibold">Shakil</span> on{" "}
              <span className="font-semibold">Jan 15th, 2023</span>
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              className="rounded-lg"
              src={"/images/post-3 1.png"}
              alt=""
              height={249}
              width={360}
            />
            <h1 className="font-semibold text-[18px] pt-[44px] pb-[5px]">
              First Time Home Owner Ideas
            </h1>
            <p>
              by <span className="font-semibold">Shakil</span> on{" "}
              <span className="font-semibold">Jan 15th, 2023</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecentBlog;
