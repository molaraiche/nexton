import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="bg-gray-bg flex rounded-full w-[400px] h-10 md:h-[52px] items-center font-poppins mx-4 p-2.5">
      <button className="w-[10%] flex items-center justify-center">
        <CiSearch id="searchInput" className="w-6 h-6" type="submit" />
      </button>
      <input
        type="search"
        id="searchInput"
        placeholder="Search in products..."
        className="w-[90%] flex items-center p-2.5 justify-center outline-none rounded-full"
      />
    </form>
  );
};

export default SearchBar;
