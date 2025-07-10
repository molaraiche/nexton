import Image from "next/image";

import { productType } from "@/types";

const CheckoutCard = ({
  title,
  image,
  quantity,
  price,
  oldPrice,
}: productType) => {
  return (
    <div className="flex items-center justify-center w-full md:w-[618px] h-auto md:h-[132px] border border-border font-poppins p-6">
      <div className="mr-6">
        <Image
          src={image}
          alt=""
          width={96}
          height={108}
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-[425px] flex items-center">
        <h5 className="text-primary font-semibold leading-6"> {title}</h5>

        <div className=" flex items-center justify-center  rounded-full p-2">
          <span className=" font-semibold text-sm">X</span>
          {quantity}
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-primary ">${oldPrice}</p>
        <p className="text-body-text-color text-sm line-through ml-2">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCard;
