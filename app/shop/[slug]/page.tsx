import { supabase } from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import ImgHandler from "@/components/shared/ImgHandler";
import Quantity from "@/components/Quantity";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { slug } = params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <div className="h-[20vh] flex items-center justify-center flex-col font-poppins">
        <h1 className="text-5xl text-primary font-semibold">
          Oups, Wrong direction
        </h1>
        <Link
          href="/shop"
          className="bg-primary text-white font-medium px-14 py-2.5 rounded-xl mt-5"
        >
          Shop
        </Link>
      </div>
    );
  }
  return (
    <section className="container mx-auto p-6 font-poppins">
      <div className=" flex justify-center flex-col md:flex-row">
        <div className=" flex w-full md:w-[60%] gap-6">
          <div className="flex flex-col gap-4 mt-4 ">
            <Image
              src={product.image}
              alt={product.title}
              width={140}
              height={158}
              className="rounded-2xl"
            />
            <Image
              src={product.image}
              alt={product.title}
              width={140}
              height={158}
              className="rounded-2xl"
            />{" "}
            <Image
              src={product.image}
              alt={product.title}
              width={140}
              height={158}
              className="rounded-2xl"
            />{" "}
            <Image
              src={product.image}
              alt={product.title}
              width={140}
              height={158}
              className="rounded-2xl"
            />
          </div>

          <div className="">
            <ImgHandler src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="border rounded-2xl border-border w-full md:w-[40%] p-8 mt-5 md:mt-0">
          <div className="flex items-center justify-between ">
            <div className="flex items-center text-body-text-color font-semibold gap-1 mt-4">
              <FaStar className="text-[#FBBF24]" />
              <span>
                {product.review ? (
                  product.review
                ) : (
                  <p className="text-body-text-color font-medium underline">
                    0 reviews
                  </p>
                )}
              </span>
              <span className="mx-1">
                ({product.sales ? product.sales : 0})
              </span>
            </div>
            <div className="">
              <p className="text-primary font-semibold"> ${product.price} </p>
              <p className="text-body-text-color text-base  line-through">
                {" "}
                ${product.oldPrice}{" "}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-primary font-semibold"> Size: S </p>
            <div className="flex items-center justify-between">
              {product.size.map((l: string) => (
                <span
                  className="w-[72px] h-11 border boder-border text-body-text-color font-semibold flex items-center justify-center rounded-[10px]"
                  key={l}
                >
                  {" "}
                  {l}{" "}
                </span>
              ))}
            </div>
            <Quantity quantity={0} product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
