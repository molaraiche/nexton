"use client";
import { categories } from "@/constants/filter/categories";
import React from "react";

type CategoriesProps = {
  selectedCategory: string;
  onChange: (category: string) => void;
};
const Categories = ({ selectedCategory, onChange }: CategoriesProps) => {
  return (
    <div className="font-poppins mb-10">
      <h3 className="text-lg text-primary text-[28px] font-semibold">
        Categories
      </h3>
      <div>
        {categories.map((cat) => (
          <div
            className="flex items-center gap-2 mt-4 cursor-pointer"
            key={cat.id}
          >
            <input
              type="radio"
              name="category"
              id={cat.name}
              checked={selectedCategory === cat.name}
              onChange={() => onChange(cat.name)}
              className="custom-checkbox"
            />
            <label htmlFor={cat.name} className="text-body-text-color text-sm">
              {cat.name}
            </label>
          </div>
        ))}
        <button
          className="mt-4 text-sm text-primary hover:text-vibrant ease-in duration-200 curosr-pointer underline"
          onClick={() => onChange("")}
        >
          Clear filter
        </button>
      </div>
    </div>
  );
};

export default Categories;
