"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = searchInput.trim();
    if (trimmed) {
      router.push(`/shop?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push(`/shop`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-bg flex rounded-full w-[400px] h-10 md:h-[52px] items-center font-poppins mx-4 p-2.5"
    >
      <button
        className="w-[10%] flex items-center justify-center"
        type="submit"
      >
        <CiSearch className="w-6 h-6 text-body-text-color" />
      </button>
      <input
        type="search"
        placeholder="Search in products..."
        className="w-[90%] p-2.5 outline-none rounded-full placeholder:text-body-text-color"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
