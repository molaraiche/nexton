import { sort } from "@/constants/filter/sort";
import React from "react";

const Sort = () => {
  return (
    <div className="font-poppins mb-10">
      <h3 className="text-lg text-primary text-[28px] font-semibold">
        Sort order
      </h3>
      <div className="">
        {sort.map((sort) => (
          <div
            className="flex items-center gap-2 mt-4 cursor-pointer"
            key={sort.id}
          >
            <input
              type="checkbox"
              name={sort.name}
              id={sort.name}
              className="custom-checkbox"
            />
            <label htmlFor={sort.name} className="text-body-text-color text-sm">
              {sort.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;
