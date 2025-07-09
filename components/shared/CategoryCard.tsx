import { categoryType } from "@/types";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const CategoryCard = ({ title, details, link }: categoryType) => {
  return (
    <div className="flex w-[419px] h-[132px] border border-border rounded-2xl items-center justify-between p-5 font-poppins mx-3">
      <div className="">
        <h4 className="text-2xl font-semibold text-primary "> {title} </h4>
        <p className="text-sm text-body-text-color"> {details} </p>
      </div>
      <div className="border-l-[5px] p-2 flex items-center justify-center h-[36px] border-border">
        <Link
          href={link}
          className="flex items-center gap-2 uppercase text-body-text-color font-medium"
        >
          {" "}
          Shop Now
          <GoArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
