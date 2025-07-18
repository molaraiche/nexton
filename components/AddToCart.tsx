"use client";

import { useCart } from "@/context/CartContext";
import { AddToCartProps } from "@/types";
import { LiaShoppingBasketSolid } from "react-icons/lia";

const AddToCart = ({ product, quantity }: AddToCartProps) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ ...product, quantity })}
      className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 h-14 w-[178px] justify-center hover:bg-vibrant transition cursor-pointer "
    >
      <LiaShoppingBasketSolid className="w-4 h-4" />
      Add to Cart
    </button>
  );
};

export default AddToCart;
