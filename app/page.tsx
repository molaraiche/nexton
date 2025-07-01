import Card from "./components/Card";
import Credentiels from "./components/Credentiels";
import Exploring from "./components/Exploring";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Sliders from "./components/Sliders";
import SmallFooter from "./components/SmallFooter";

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
      <Footer />
      <SmallFooter />
    </section>
  );
};

export default App;
