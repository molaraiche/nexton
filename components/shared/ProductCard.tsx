"use client";
import { useCart } from "@/context/CartContext";
import { productType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const ProductCard = ({
  id,
  image,
  title,
  category,
  review,
  sales,
  price,
  oldPrice,
  slug,
  quantity,
}: productType) => {
  const { addToCart } = useCart();
  const product = {
    id,
    image,
    title,
    category,
    review,
    sales,
    price,
    oldPrice,
    slug,
    quantity,
  };

  return (
    <Link
      href={`/shop/${slug}`}
      className="font-poppins flex flex-col relative w-[309px] h-[448px]"
    >
      <div className="">
        <div className="flex items-center justify-end">
          <div className="w-9 h-9 bg-white flex items-center justify-center rounded-full absolute top-5 right-5 cursor-pointer z-10 ">
            <FaBagShopping
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="text-primary hover:text-vibrant w-5 h-5 ease-in-out duration-200"
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
            <p className="text-primary font-semibold"> ${price} </p>
            <p className="text-body-text-color text-base  line-through">
              {" "}
              ${oldPrice}{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center text-body-text-color font-semibold gap-1 mt-4">
          <FaStar className="text-[#FBBF24]" />
          <span> {review ? review : 0}</span>
          <span className="mx-1"> ({sales ? sales : 0})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
