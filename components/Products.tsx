import { products } from "@/constants/products";
import Slogan from "./slogan";
import ProductCard from "./shared/ProductCard";
import { productType } from "@/types";

const Products = ({
  strong,
  paragraph,
}: {
  strong?: string;
  paragraph?: string;
}) => {
  return (
    <section className="mx-auto container my-20 font-poppins">
      <Slogan strong={strong} paragraph={paragraph} />
      <div className="mt-10 flex items-center justify-center md:justify-between flex-wrap gap-5 md:gap-0">
        {products.map((product: productType) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            review={product.review}
            sales={product.sales}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
