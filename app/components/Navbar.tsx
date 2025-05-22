import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import Manage from "./Manage";

const Navbar = () => {
  return (
    <nav className="h-[15vh] flex items-center justify-between">
      <div className="">
        <Image
          src="/assets/logo.svg"
          alt="company logo"
          width={100}
          height={100}
          className="hidden md:flex  "
        />
        <Image
          src="/assets/mini-logo.svg"
          alt="company logo"
          width={24}
          height={24}
          className="flex md:hidden min-w-[24px] min-h-[24px]"
        />
      </div>
      <SearchBar />
      <Manage />
    </nav>
  );
};

export default Navbar;
