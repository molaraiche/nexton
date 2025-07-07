import Categories from "../components/Categories";
import PriceRange from "../components/PriceRange";

const Shop = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-between mx-auto container">
      <div className="w-[25%] flex flex-col justify-start ">
        <Categories />
        <PriceRange />
      </div>
      <div className="bg-yellow-500 w-[75%] flex items-center justify-center">
        Products
      </div>
    </section>
  );
};

export default Shop;
