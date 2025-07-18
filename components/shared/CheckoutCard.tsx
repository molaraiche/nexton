import Image from "next/image";

import { productType } from "@/types";
import { useCart } from "@/context/CartContext";
import { MdDelete } from "react-icons/md";

const CheckoutCard = ({
  id,
  title,
  image,
  quantity = 1,
  price,
  oldPrice,
}: productType) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-center w-full rounded-xl h-auto md:h-[142px] border border-border font-poppins p-6">
      <div className="mr-6">
        <Image
          src={image}
          alt=""
          width={140}
          height={135}
          className="rounded-xl"
        />
      </div>
      <div className="w-full  flex items-center">
        <h5 className="text-primary font-semibold leading-6"> {title}</h5>

        <div className=" flex items-center justify-center  rounded-full p-2 ml-5">
          <span className="font-semibold text-sm"> {price} </span>
          <span className=" font-semibold text-sm px-2">X</span>
          <span className="font-semibold text-sm"> {quantity} </span>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-primary">${price * quantity}</p>
        <p className="  text-body-text-color text-sm line-through ml-">
          ${oldPrice * quantity}
        </p>
      </div>
      <div className="flex items-center justify-center px-3">
        <button onClick={() => removeFromCart(id as number)}>
          <MdDelete className="w-6 h-6 text-red-600 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
