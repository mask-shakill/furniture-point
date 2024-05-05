import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-[9px]">
      <h1 className="font-bold text-yellow-400 text-3xl pl-[45px] ">
        FurniZone
      </h1>
      <ul className="flex items-center gap-x-8 text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>About us</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Contact us</Link>
      </ul>
      <div className="pr-[34px] flex items-center gap-x-3">
        <div className="flex text-xl font-bold text-white gap-x-5">
          <span>
            <CgProfile />
          </span>
          <span>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
