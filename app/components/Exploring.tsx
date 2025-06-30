import { categories } from "@/constants/categories";
import CategoryCard from "./CategoryCard";
import { categoryType } from "@/types";
import Slogan from "./slogan";

const Exploring = () => {
  return (
    <section className="mx-auto container font-poppins mt-20">
      <Slogan
        strong={"Start exploring"}
        paragraph={"Good things are waiting for you"}
      />
      <div className=" rounded-2xl font-poppins  flex container mx-auto mt-14  justify-center md:justify-between items-center flex-wrap">
        {categories.map((category: categoryType) => (
          <CategoryCard
            title={category.title}
            details={category.details}
            link={category.link}
            key={category.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Exploring;
