import React from "react";
import { sort } from "@/constants/filter/sort";

type SortProps = {
  selectedSort: string;
  setSelectedSort: (value: string) => void;
};

const Sort = ({ selectedSort, setSelectedSort }: SortProps) => {
  return (
    <div className="font-poppins mb-10">
      <h3 className="text-lg text-primary text-[28px] font-semibold">
        Sort order
      </h3>
      <div>
        {sort.map((item) => (
          <div
            className="flex items-center gap-2 mt-4 cursor-pointer"
            key={item.id}
            onClick={() => setSelectedSort(item.value)}
          >
            <input
              type="radio"
              name="sortOrder"
              id={item.name}
              checked={selectedSort === item.value}
              onChange={() => setSelectedSort(item.value)}
              className="custom-radio"
            />
            <label htmlFor={item.name} className="text-body-text-color text-sm">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;
