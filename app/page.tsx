import Card from "../components/Card";
import Credentiels from "../components/Credentiels";
import Exploring from "../components/Exploring";
import Products from "../components/Products";
import Sliders from "../components/Sliders";

const App = () => {
  return (
    <section>
      <Sliders />
      <Credentiels />
      <Exploring />
      <Products
        strong={"Recommendations"}
        paragraph={"Best matching products for you"}
      />
      <Products
        strong={"Best Sellers"}
        paragraph={"Best selling of the month"}
      />
      <Card />
    </section>
  );
};

export default App;
