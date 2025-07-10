"use client";
import React from "react";

type PriceRangeProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  priceLimits: { min: number; max: number };
};

const PriceRange = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  priceLimits,
}: PriceRangeProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <form className="font-poppins mb-10 w-[300px] relative">
      <h3 className="text-lg text-primary text-[28px] font-semibold mb-4">
        Price range
      </h3>

      <div className="relative w-full h-10">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-bg rounded-lg -translate-y-1/2"></div>

        <div
          className="absolute top-1/2 h-2 bg-vibrant rounded-lg -translate-y-1/2"
          style={{
            left: `${
              ((minPrice - priceLimits.min) /
                (priceLimits.max - priceLimits.min)) *
              100
            }%`,
            right: `${
              100 -
              ((maxPrice - priceLimits.min) /
                (priceLimits.max - priceLimits.min)) *
                100
            }%`,
          }}
        ></div>

        <input
          type="range"
          min={priceLimits.min}
          max={priceLimits.max}
          step={1}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full h-10 bg-transparent pointer-events-auto appearance-none"
          style={{ zIndex: minPrice > priceLimits.max - 100 ? 5 : 3 }}
        />

        <input
          type="range"
          min={priceLimits.min}
          max={priceLimits.max}
          step={1}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full h-10 bg-transparent pointer-events-auto appearance-none"
          style={{ zIndex: 4 }}
        />
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex-1">
          <label
            htmlFor="minPrice"
            className="block text-sm font-medium text-body-text-color mb-1"
          >
            Min Price
          </label>
          <div className="flex items-center border border-border rounded-md px-2">
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              min={priceLimits.min}
              max={maxPrice - 1}
              step={1}
              className="w-full py-1 outline-none font-semibold"
              value={minPrice}
              onChange={(e) => {
                const val = Math.min(Number(e.target.value), maxPrice - 1);
                setMinPrice(Math.max(priceLimits.min, val));
              }}
            />
            <span className="ml-1 text-sm text-body-text-color">$</span>
          </div>
        </div>

        <div className="flex-1">
          <label
            htmlFor="maxPrice"
            className="block text-sm font-medium text-body-text-color mb-1"
          >
            Max Price
          </label>
          <div className="flex items-center border border-border rounded-md px-2">
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              min={minPrice + 1}
              max={priceLimits.max}
              step={1}
              className="w-full py-1 outline-none font-semibold"
              value={maxPrice}
              onChange={(e) => {
                const val = Math.max(Number(e.target.value), minPrice + 1);
                setMaxPrice(Math.min(priceLimits.max, val));
              }}
            />
            <span className="ml-1 text-sm text-body-text-color">$</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PriceRange;
