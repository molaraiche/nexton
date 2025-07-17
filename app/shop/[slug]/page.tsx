import { supabase } from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import AddToCart from "@/components/AddToCart";

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
  //   console.log(product.images);
  return (
    <section className="container mx-auto p-6 font-poppins">
      <div className=" flex justify-center">
        <div className=" flex w-[60%] gap-6">
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
            <Image
              src={product.image}
              alt={product.title}
              width={640}
              height={680}
            />
          </div>
        </div>
        <div className="border rounded-2xl border-border w-[40%] p-8">
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
            <div className=" my-8 flex items-center justify-between">
              <form
                action=""
                className="flex items-center justify-center w-[110px] h-10 bg-gray-bg  rounded-lg"
              >
                {" "}
                <CiCircleMinus className="w-6 h-6 cursor-pointer" />
                <input
                  type="number"
                  placeholder="max 10"
                  value={1}
                  className="w-[40px] text-center outline-none text-body-text-color font-medium"
                />
                <CiCirclePlus className="w-6 h-6 cursor-pointer" />
              </form>
              <AddToCart product={product} />
            </div>
            <div className="">
              <div className="flex items-center justify-between text-body-text-color">
                <div className="">{product.price} x1</div> {/* add quanitity */}
                <div className="">{product.price}</div>
              </div>
              <div className="flex items-center justify-between text-body-text-color">
                <div className="">Tax estimate</div>
                <div className="">$0</div>
              </div>
              <hr className="text-border" />
              <div className="flex items-center justify-between font-semibold text-primary">
                <div className="">Total</div>
                <div className="">${product.price} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500">Description</div>
      <div className="bg-yellow-500">Recommandation</div>
    </section>
  );
};

export default ProductDetails;
