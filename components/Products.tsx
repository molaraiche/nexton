import Slogan from "./Slogan";
import ProductCard from "./shared/ProductCard";
import { productType } from "@/types";
import { supabase } from "@/supabase";

const Products = async ({
  strong,
  paragraph,
}: {
  strong?: string;
  paragraph?: string;
}) => {
  const { data } = await supabase.from("products").select().limit(4);
  return (
    <section className="mx-auto container my-20 font-poppins">
      <Slogan strong={strong} paragraph={paragraph} />
      <div className="mt-10 flex items-center justify-center md:justify-between flex-wrap gap-5 md:gap-0">
        {data?.map((product: productType) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            oldPrice={product.oldPrice}
            price={product.price}
            review={product.review}
            sales={product.sales}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
