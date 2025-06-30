const Card = () => {
  return (
    <div className="bg-[url(/assets/bg-image.png)] h-[437px] w-full bg-no-repeat bg-right bg-[#F5F5F5] mx-auto container rounded-3xl font-poppins hidden md:flex">
      <div className="flex flex-col p-[120px]">
        <p className="text-xl text-body-text-color font-medium">
          100% Original Products
        </p>
        <h1 className="text-4xl font-semibold leading-10 text-primary mt-3.5">
          The All New Fashion
          <br /> Collection Items
        </h1>
        <p className="text-xl font-medium leading-7 text-body-text-color my-6">
          Starting from: $59.99
        </p>
        <div className="">
          <button className="bg-primary text-white font-medium leading-6 w-[144px] h-[52px] rounded-full ">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
