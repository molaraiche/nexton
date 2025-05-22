"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { BiSearch } from "react-icons/bi";

const Sliders = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 1,
  });
  const imagesNumber = [1, 2, 3];

  return (
    <div ref={sliderRef} className="keen-slider">
      {imagesNumber.map((img) => (
        <div
          key={img}
          className={`bg-[url(/assets/hero-bg-${img}.jpg)] bg-no-repeat bg-center bg-cover h-[80vh] relative keen-slider__slide cursor-grab`}
        >
          <div className="flex items-start justify-center flex-col  h-[80vh] w-[632px] ml-[120px]">
            <p className="body-medium-20">Starting from: $49.99</p>
            <h1 className="h1-screen">Exclusive collection for everyone</h1>
            <div className="">
              <button className="bg-primary text-default body-medium-16 flex items-center justify-center rounded-full gap-3 w-[198px] h-16">
                Explore now <BiSearch className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Sliders;
