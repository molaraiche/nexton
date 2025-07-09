"use client";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Cart from "./Cart";
const Manage = () => {
  const [menu, setMenu] = useState(false);

  const mobileMenuHandler = () => setMenu(!menu);
  return (
    <>
      <div
        className={`items-center flex absolute md:static gap-5 md:gap-0 top-[15vh] bg-primary md:bg-transparent h-[20vh] md:h-fit w-full md:w-fit right-0 text-white md:text-primary flex-col md:flex-row justify-center ease-in-out duration-300 ${
          menu ? "translate-x-[0%]" : "-translate-x-[200%]"
        }`}
      >
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <Link href="/login" className="">
            <FiUser className="w-6 h-6 text-default md:text-body-text-color" />
          </Link>
          <Cart />
        </div>
      </div>
      <div className="flex md:hidden">
        {menu ? (
          <IoMdClose className="w-8 h-8" onClick={mobileMenuHandler} />
        ) : (
          <FiMenu className="w-8 h-8" onClick={mobileMenuHandler} />
        )}
      </div>
    </>
  );
};

export default Manage;
