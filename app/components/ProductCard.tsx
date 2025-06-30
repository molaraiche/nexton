import { productType } from "@/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  category,
  review,
  sales,
  newPrice,
  oldPrice,
}: productType) => {
  return (
    <div className="font-poppins flex flex-col relative w-[309px] h-[448px]">
      <div className="">
        <div className="flex items-center justify-end">
          <div className="w-9 h-9 bg-white flex items-center justify-center rounded-full absolute top-5 right-5 cursor-pointer z-10">
            <Image
              src={"/assets/cart.svg"}
              width={16}
              height={16}
              alt={category}
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            width={320}
            height={360}
            alt={category}
            className="transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer "
          />
        </div>
      </div>
      <div className="flex flex-col justify-between p-2.5">
        <div className="flex items-center justify-between ">
          <div className="">
            <h5 className="text-primary font-semibold"> {title} </h5>
            <p className="text-body-text-color text-base"> {category} </p>
          </div>
          <div className="">
            <p className="text-primary font-semibold"> ${newPrice} </p>
            <p className="text-body-text-color text-base  line-through">
              {" "}
              ${oldPrice}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center text-body-text-color font-semibold gap-1 mt-4">
          <FaStar className="text-[#FBBF24]" />
          <span> {review}</span>
          <span className="mx-1"> ({sales})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
