import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <main className=" mt-64 bg-white">
      <section className="flex relative  ml-[99px]  h-[286px] ">
        <div className="h-[80px] w-[612px] mt-[145px]  ">
          <div className="flex items-center gap-x-1">
            <span className="text-2xl text-slate-400">
              {" "}
              <MdOutlineEmail />
            </span>
            <h1 className="font-semibold text-lg">Subscribe to Newsletter</h1>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              className="border border-slate-500 rounded h-[35px] px-4"
              type="text"
              placeholder="Enter your Name"
            />
            <input
              className="border border-slate-500 rounded h-[35px] px-4"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="w-[50px] h-[41px] rounded-[10px] bg-[#35736E] pl-[11px]">
              <span>
                <IoIosSend className="w-[29px] h-[27px] text-white" />
              </span>
            </button>
          </div>
        </div>
        <div className="pl-[65px]">
          <Image
            className="absolute -top-36 "
            src={"/images/sofa 1.png"}
            alt=""
            height={396}
            width={458}
          ></Image>
        </div>
      </section>

      <section className="ml-[99px] h-[220px]  ">
        <h1 className="font-bold text-2xl text-[#35736E]">FurniZone</h1>
        <div className="grid grid-cols-8 gap-16">
          <div className="col-span-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iusto consectetur similique, voluptas ad tempora temporibus quasi
              porro provident labore saepe consequuntur alias illum facere
              dolorem officia dolore, praesentium odit dolorum ab sint!
              Mollitia.
            </p>
          </div>

          <div className="col-span-1">
            <div>
              <p>About us</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <p>Support </p>
              <p>Knowledge base </p>
              <p>Live chat</p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <p>Jobs </p>
              <p>Our team </p>
              <p>Leadership </p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <p>Nordic Chair </p>
              <p>Kruzo Aero </p>
              <p>Ergonomic</p>
            </div>
          </div>

          {/* <div className="col-span-1">
            <div>
              <p>About us</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Contact;
