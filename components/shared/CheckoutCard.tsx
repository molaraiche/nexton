import Image from "next/image";
import { IoMdResize } from "react-icons/io";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CheckoutCard = () => {
  return (
    <div className="flex items-center justify-center w-full md:w-[618px] h-auto md:h-[132px] border border-border font-poppins p-6">
      <div className="mr-6">
        <Image
          src="/assets/product.jpg"
          alt=""
          width={96}
          height={108}
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-[425px]">
        <h5 className="text-primary font-semibold leading-6">
          {" "}
          Black Automatic Watch{" "}
        </h5>
        <p className="text-body-text-color flex items-center gap-2">
          <IoMdResize /> One size
        </p>
        <div className="bg-gray-bg flex items-center justify-center w-[110px] h-10   rounded-full p-2">
          <button>
            <CiCircleMinus />
          </button>
          <input
            type="number"
            placeholder="1"
            defaultValue={1}
            max={10}
            min={1}
            className="text-center mx-2 w-6"
          />
          <button>
            <CiCirclePlus />
          </button>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-primary ">$169.99</p>
        <p className="text-body-text-color text-sm line-through ml-2">
          $199.99
        </p>
      </div>
    </div>
  );
};

export default CheckoutCard;
