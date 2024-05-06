import Image from "next/image";
import React from "react";

const ChooseUs = () => {
  return (
    <div className=" mt-[220px] ml-[99px]">
      <h1 className="font-semibold text-[34px] ">Why Choose Us</h1>

      <div className="flex">
        <div className="w-[540px] h-[364px] ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            aliquid voluptates fuga.aliquid voluptates fuga.
          </p>

          <div className="grid grid-cols-2 gap-x-[11px] gap-y-[22px] mt-7">
            <div className="w-[247px] h-[137px]">
              <Image
                src={"/images/Truck.png"}
                alt=""
                height={32}
                width={24}
              ></Image>
              <h1 className="font-semibold text-[14px] pt-[12px]">
                Easy to Shop
              </h1>
              <p className="pt-[8.50px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                officiis.
              </p>
            </div>
            <div className="w-[247px] h-[137px]">
              <Image
                src={"/images/Shop bag.png"}
                alt=""
                height={32}
                width={24}
              ></Image>
              <h1 className="font-semibold text-[14px] pt-[12px]">
                24/7 Support
              </h1>
              <p className="pt-[8.50px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                officiis.
              </p>
            </div>
            <div className="w-[247px] h-[137px]">
              <Image
                src={"/images/Support.png"}
                alt=""
                height={32}
                width={24}
              ></Image>
              <h1 className="font-semibold text-[14px] pt-[12px]">
                Hassle Free Returns
              </h1>
              <p className="pt-[8.50px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                officiis.
              </p>
            </div>
            <div className="w-[247px] h-[137px]">
              <Image
                src={"/images/Return.png"}
                alt=""
                height={32}
                width={24}
              ></Image>
              <h1 className="font-semibold text-[14px] pt-[12px]">
                Fast & Free Shipping
              </h1>
              <p className="pt-[8.50px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                officiis.
              </p>
            </div>
          </div>
        </div>

        <div className="pl-[194px] pr-[155px]">
          <Image
            src={"/images/why-choose-us-img 1.png"}
            alt="choose us"
            height={592}
            width={514}
          ></Image>
        </div>
      </div>

      <div className="flex mt-[110px]">
        <div className="w-[670px] h-[520px]  relative">
          <Image
            className="rounded-lg"
            src={"/images/img-grid-1 1.png"}
            alt=""
            height={516}
            width={424}
          ></Image>
          <Image
            className="absolute top-0 right-0 pr-7 rounded-lg"
            src={"/images/img-grid-2 1.png"}
            alt=""
            height={195}
            width={209}
          ></Image>
          <Image
            className="absolute -bottom-4 -right-2 rounded-lg "
            src={"/images/img-grid-3 1.png"}
            alt=""
            height={363}
            width={305}
          ></Image>
        </div>

        <div className="ml-[56px] w-[471px] h-[422px]  mr-[90px]">
          <h1 className="font-semibold text-[34px]">
            We help you make Modern interior Design
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita illo earum! Assumenda mollitia quisquam, quos saepe fugiat,
            officiis aspernatur ipsa, nobis sint sed quia! officiis aspernatur
            ipsa, nobis sint sed quia!
          </p>
          <div className=" grid grid-cols-2 gap-x-[23px] gap-y-[22px] pt-[29px]">
            <div className="flex   gap-x-3">
              <div className="pt-1">
                <Image
                  src={"/images/Ellipse 66.png"}
                  alt=""
                  height={10}
                  width={11}
                ></Image>
              </div>
              <p>Done mattis porta eros, let aliquet finibus ri</p>
            </div>
            <div className="flex   gap-x-3">
              <div className="pt-1">
                <Image
                  src={"/images/Ellipse 66.png"}
                  alt=""
                  height={10}
                  width={11}
                ></Image>
              </div>
              <p>Done mattis porta eros, let aliquet finibus ri</p>
            </div>
            <div className="flex   gap-x-3">
              <div className="pt-1">
                <Image
                  src={"/images/Ellipse 66.png"}
                  alt=""
                  height={10}
                  width={11}
                ></Image>
              </div>
              <p>Done mattis porta eros, let aliquet finibus ri</p>
            </div>
            <div className="flex   gap-x-3">
              <div className="pt-1">
                <Image
                  src={"/images/Ellipse 66.png"}
                  alt=""
                  height={10}
                  width={11}
                ></Image>
              </div>
              <p>Done mattis porta eros, let aliquet finibus ri</p>
            </div>
          </div>
          <button className="w-[160px] h-[47px] bg-[#35736E] text-white rounded-[20px] mt-10 ml-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
