"use client";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import AddToCart from "./AddToCart";
import { AddToCartProps } from "@/types";
import { useState } from "react";

const Quantity = ({ product }: AddToCartProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addHandler = () => setQuantity((prev) => (prev < 10 ? prev + 1 : prev));

  const minusHandler = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <div className=" my-8 flex items-center justify-between">
        <form
          action=""
          className="flex items-center justify-center w-[110px] h-10 bg-gray-bg  rounded-lg"
        >
          {" "}
          <CiCircleMinus
            onClick={minusHandler}
            className="w-6 h-6 cursor-pointer"
          />
          <input
            type="number"
            placeholder="max 10"
            value={quantity}
            className="w-[40px] text-center outline-none text-body-text-color font-medium"
          />
          <CiCirclePlus
            onClick={addHandler}
            className="w-6 h-6 cursor-pointer"
          />
        </form>
        <AddToCart product={product} quantity={quantity} />
      </div>
      <div className="">
        <div className="flex items-center justify-between text-body-text-color">
          <div className="">
            {product.price} x{quantity}
          </div>{" "}
          {/* add quanitity */}
          <div className="">{product.price}</div>
        </div>
        <div className="flex items-center justify-between text-body-text-color">
          <div className="">Tax estimate</div>
          <div className="">$0</div>
        </div>
        <hr className="text-border" />
        <div className="flex items-center justify-between font-semibold text-primary mt-3">
          <div className="">Total</div>
          <div className="">${(product.price * quantity).toFixed(2)} </div>
        </div>
      </div>
    </>
  );
};

export default Quantity;
