import Card from "./components/Card";
import Credentiels from "./components/Credentiels";
import Exploring from "./components/Exploring";
import Projects from "./components/Projects";
import Sliders from "./components/Sliders";

const App = () => {
  return (
    <section>
      <Sliders />
      <Credentiels />
      <Exploring />
      <Projects
        strong={"Recommendations"}
        paragraph={"Best matching products for you"}
      />
      <Projects
        strong={"Best Sellers"}
        paragraph={"Best selling of the month"}
      />
      <Card />
    </section>
  );
};

export default App;
