import Image from "next/image";
import SearchBar from "./SearchBar";
import Manage from "./Manage";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[15vh] flex items-center justify-between">
      <Link href="/" className="">
        <Image
          src="/assets/logo.svg"
          alt="company logo"
          width={100}
          height={100}
          priority
          className="hidden md:flex w-full"
        />
        <Image
          src="/assets/mini-logo.svg"
          alt="company logo"
          width={24}
          height={24}
          priority
          className="flex md:hidden min-w-[24px] min-h-[24px] w-full"
        />
      </Link>
      <SearchBar />
      <Manage />
    </nav>
  );
};

export default Navbar;
