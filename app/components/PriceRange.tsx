"use client";
import { useState } from "react";

export default function PriceRange() {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);

  // Handle changes from range input
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    // Update both prices together (move them in sync)
    const range = maxPrice - minPrice;
    const newMin = Math.max(10, value);
    const newMax = Math.min(999, newMin + range);

    setMinPrice(newMin);
    setMaxPrice(newMax);
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl space-y-4">
      <div>
        <label
          htmlFor="priceRange"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Price Range Control
        </label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="10"
          max="999"
          step="10"
          value={minPrice}
          onChange={handleRangeChange}
          className="w-full"
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
              className="w-full py-1 outline-none"
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
              className="w-full py-1 outline-none"
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
}
