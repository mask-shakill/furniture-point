import React from "react";
import Image from "next/image";
const ExcellentProduct = () => {
  return (
    <>
      <div className="h-[288px] bg-[#35736E]  bg-opacity-10 relative rounded-[20px]  flex-col  ">
        <Image
          className="absolute -top-[71px] right-[33px] left-[33px]"
          src={"/images/modern_chair.png"}
          width={190}
          height={244}
          alt="modern chair"
        ></Image>
        <div className="absolute bottom-0 flex flex-col items-center w-full pb-[25px] font-medium">
          <h1 className="mb-2">Modern Chair</h1>
          <p>$60.00</p>
        </div>
      </div>

      <div className="h-[288px] bg-[#35736E]  bg-opacity-10 relative rounded-[20px]  flex-col  ">
        <Image
          className="absolute -top-[71px] right-[33px] left-[33px]"
          src={"/images/modern_chair.png"}
          width={190}
          height={244}
          alt="modern chair"
        ></Image>
        <div className="absolute bottom-0 flex flex-col items-center w-full pb-[25px] font-medium">
          <h1 className="mb-2">Kruzo Aero Chair</h1>
          <p>$78.00</p>
        </div>
      </div>

      <div className="h-[288px] bg-[#35736E]  bg-opacity-10 relative rounded-[20px]  flex-col  ">
        <Image
          className="absolute -top-[71px] right-[33px] left-[33px]"
          src={"/images/erogonomic_chair.png"}
          width={190}
          height={244}
          alt="modern chair"
        ></Image>
        <div className="absolute bottom-0 flex flex-col items-center w-full pb-[25px] font-medium">
          <h1 className="mb-2">Ergonomic Chair</h1>
          <p>$88.00</p>
        </div>
      </div>
    </>
  );
};

export default ExcellentProduct;
