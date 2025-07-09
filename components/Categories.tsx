import { categories } from "@/constants/filter/categories";
import React from "react";

const Categories = () => {
  return (
    <div className="font-poppins mb-10">
      <h3 className="text-lg text-primary text-[28px] font-semibold">
        Categories
      </h3>
      <div className="">
        {categories.map((cat) => (
          <div
            className="flex items-center gap-2 mt-4 cursor-pointer"
            key={cat.id}
          >
            <input
              type="checkbox"
              name={cat.name}
              id={cat.name}
              className="custom-checkbox"
            />
            <label htmlFor={cat.name} className="text-body-text-color text-sm">
              {cat.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
