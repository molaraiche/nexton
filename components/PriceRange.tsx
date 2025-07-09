"use client";
import { useState } from "react";

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const range = maxPrice - minPrice;
    const newMin = Math.max(5, value);
    const newMax = Math.min(999, newMin + range);

    setMinPrice(newMin);
    setMaxPrice(newMax);
  };

  return (
    <form className="font-poppins mb-10">
      <div>
        <h3 className="text-lg text-primary text-[28px] font-semibold">
          Price range
        </h3>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="10"
          max="999"
          step="10"
          value={minPrice}
          onChange={handleRangeChange}
          className="w-full my-4 bg-[#0EA5E9]"
        />
      </div>

      <div className="flex gap-4">
        {/* Min Price */}
        <div className="flex-1">
          <label
            htmlFor="minPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Min Price
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              min="10"
              max={maxPrice - 10}
              step="10"
              className="w-full py-1 outline-none font-semibold"
              value={minPrice}
              onChange={(e) => {
                const value = Math.min(Number(e.target.value), maxPrice - 10);
                setMinPrice(Math.max(10, value));
              }}
            />
            <span className="ml-1 text-sm text-gray-600">$</span>
          </div>
        </div>

        {/* Max Price */}
        <div className="flex-1">
          <label
            htmlFor="maxPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Max Price
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              min={minPrice + 10}
              max="999"
              step="10"
              className="w-full py-1 outline-none font-semibold"
              value={maxPrice}
              onChange={(e) => {
                const value = Math.max(Number(e.target.value), minPrice + 10);
                setMaxPrice(Math.min(999, value));
              }}
            />
            <span className="ml-1 text-sm text-gray-600">$</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PriceRange;
