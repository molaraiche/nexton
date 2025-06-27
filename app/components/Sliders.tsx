"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { BiSearch } from "react-icons/bi";
const Sliders = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      initial: 1,
      renderMode: "performance",
      drag: true,
    },
    [
      (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const imagesNumber = [
    { id: 1, img: 1 },
    { id: 2, img: 2 },
    { id: 3, img: 3 },
  ];
  console.log(imagesNumber);
  return (
    <div ref={sliderRef} className="keen-slider -z-50 ">
      {imagesNumber.map((img) => (
        <div
          key={img.id}
          className={`bg-[url(/assets/hero-bg-${img.img}.jpg)] bg-no-repeat bg-left bg-cover h-[80vh] relative keen-slider__slide cursor-grab -z-50`}
        >
          <div className="flex items-start justify-center flex-col h-[80vh] w-full md:w-[632px] ml-5 md:ml-[120px]">
            <p className="body-medium-20">Starting from: $49.99</p>
            <h1 className="text-3xl font-semibold md:text-[64px] font-poppins text-primary;">
              Exclusive collection for everyone
            </h1>
            <div className="">
              <button className="bg-primary text-default body-medium-16 flex items-center justify-center rounded-full gap-3 w-[198px] h-16 mt-5">
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
