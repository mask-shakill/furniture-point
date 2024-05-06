import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="bg-white">
      <section className="w-[1100px] h-[300px]  ml-[99px]">
        <div className="flex gap-x-5">
          <div className="w-11 h-11 rounded-full bg-slate-300 flex justify-center items-center">
            <FaFacebookF className="text-lg" />
          </div>
          <div className="w-11 h-11 rounded-full bg-slate-300 flex justify-center items-center">
            <FaYoutube className="text-lg" />
          </div>
          <div className="w-11 h-11 rounded-full bg-slate-300 flex justify-center items-center">
            <FaLinkedin className="text-lg" />
          </div>
          <div className="w-11 h-11 rounded-full bg-slate-300 flex justify-center items-center">
            <FaTwitter className="text-lg" />
          </div>
        </div>
        <div className="flex justify-end items-center pt-10">
          <div className="flex gap-x-10">
            <h1>Term & Conditions</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
        <div className="flex justify-center pt-28 ">
          <h1>Copyright 2023 mask.shakill@gmail.com All Rights Reserved</h1>
        </div>
      </section>
    </main>
  );
};

export default Footer;
