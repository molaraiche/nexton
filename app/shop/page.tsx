import { products } from "@/constants/products";
import Categories from "../../components/Categories";
import PriceRange from "../../components/PriceRange";
import ProductCard from "../../components/shared/ProductCard";
import Sort from "../../components/Sort";
import { productType } from "@/types";
import Pagination from "@/components/Pagination";

const Shop = () => {
  return (
    <section className="flex mx-auto container mt-10 mb-20">
      <div className="w-[25%] flex flex-col justify-start ">
        <Categories />
        <PriceRange />
        <Sort />
      </div>
      <div className=" w-[75%] flex items-center justify-center gap-5 flex-wrap ">
        <div className="flex flex-col gap-5 items-center justify-center">
          {" "}
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
        <div className="flex flex-col gap-5 items-center justify-center">
          {" "}
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
        <div className="flex flex-col gap-5 items-center justify-center">
          {" "}
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
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Shop;
