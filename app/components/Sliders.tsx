"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { BiSearch } from "react-icons/bi";
import { images } from "@/constants/images";
import Link from "next/link";
const Sliders = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {images.map((img) => (
        <SwiperSlide
          key={img.id}
          className="bg-no-repeat bg-left bg-cover h-[80vh]"
          style={{ backgroundImage: `url(${img.img})` }}
        >
          <div className="flex items-start justify-center flex-col h-[80vh] w-full md:w-[632px] ml-5 md:ml-[120px] relative">
            <p className="body-medium-20">Starting from: $49.99</p>
            <h1 className="text-3xl font-semibold md:text-[64px] font-poppins text-primary;">
              Exclusive collection for everyone
            </h1>
            <div className="">
              <Link
                href="/shop"
                className="bg-primary text-default body-medium-16 flex items-center justify-center rounded-full gap-3 w-[198px] h-16 mt-5 cursor-pointer "
              >
                Explore now <BiSearch className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
