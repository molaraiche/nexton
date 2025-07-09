import FormGrp from "@/components/shared/FormGrp";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import CheckoutCard from "@/components/shared/CheckoutCard";

const Checkout = () => {
  return (
    <section className="container mx-auto font-poppins">
      <div className="px-5">
        <h1 className="text-[40px] font-semibold leading-[40px] mb-3">
          Checkout
        </h1>
        <p className="text-body-text-color font-medium">
          {" "}
          Homepage / Checkout{" "}
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 my-14">
        <div className=" w-full md:w-1/2 flex items-center justify-center flex-col">
          <div className="border border-border rounded-2xl p-6 w-full">
            <h4 className="uppercase text-body-text-color font-medium flex items-center gap-3">
              <FaRegUserCircle className="w-6 h-6" /> Contact info
            </h4>
            <form className="flex w-full gap-6  flex-col md:flex-row">
              <FormGrp
                name={"number"}
                label={"Your Phone number"}
                type={"text"}
                className="border-border rounded-xl border h-11 w-full  px-2.5"
              />
              <FormGrp
                name={"email"}
                label={"Email address"}
                type={"email"}
                className="border-border rounded-xl border h-11 w-full  px-2.5"
              />
            </form>
          </div>
          <div className="border border-border rounded-2xl p-6 w-full my-10">
            <h4 className="uppercase text-body-text-color font-medium flex items-center gap-3">
              <Image
                src="/assets/ship-icon.svg"
                alt="ship icon"
                width={24}
                height={24}
              />{" "}
              shipping adress
            </h4>
            <form>
              <div className="flex w-full gap-6 flex-col md:flex-row ">
                <FormGrp
                  name={"firstName"}
                  label={"First name"}
                  type={"text"}
                />
                <FormGrp name={"lastName"} label={"Last name"} type={"text"} />
              </div>
              <div className="flex w-full gap-6 flex-col md:flex-row">
                <FormGrp
                  name={"adress1"}
                  label={"Address line 1"}
                  type={"text"}
                />
                <FormGrp name={"apt"} label={"Apt,suite"} type={"text"} />
              </div>
              <div className="">
                <FormGrp
                  name={"adress2"}
                  label={"Adress line 2"}
                  type={"text"}
                />
              </div>
              <div className="flex w-full gap-6  flex-col md:flex-row">
                <FormGrp name={"city"} label={"City"} type={"text"} />
                <FormGrp name={"country"} label={"Country"} type={"text"} />
              </div>
              <div className="flex w-full gap-6  flex-col md:flex-row">
                <FormGrp
                  name={"state"}
                  label={"State/Province"}
                  type={"text"}
                />
                <FormGrp name={"postal"} label={"Postal code"} type={"text"} />
              </div>
            </form>
          </div>
          <div className="border border-border rounded-2xl p-6 w-full">
            <h4 className="uppercase text-body-text-color font-medium flex items-center gap-3">
              {" "}
              <CiCreditCard2 /> payment{" "}
            </h4>
            <form className="">
              <FormGrp
                name={"cardNumber"}
                label={"Card number"}
                type={"text"}
              />
              <FormGrp
                name={"cardName"}
                label={"Name on the Card"}
                type={"text"}
              />
              <div className="flex w-full gap-6  flex-col md:flex-row">
                <FormGrp
                  name={"expDate"}
                  label={"Expiration date (MM/YY)"}
                  type={"month"}
                />
                <FormGrp name={"cvc"} label={"CVC"} type={"number"} />
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex flex-col">
          <div className="mb-6 px-5">
            <h2 className="text-2xl text-[32px] font-semibold text-primary leading-8">
              Order summary
            </h2>
          </div>
          <div className="flex flex-col justify-center w-full gap-6 px-5">
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
