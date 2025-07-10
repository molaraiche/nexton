"use client";

import CheckoutButton from "@/components/CheckoutBtn";
import CheckoutCard from "@/components/shared/CheckoutCard";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="container mx-auto font-poppins">
      <div className="px-5">
        <h1 className="text-[40px] font-semibold leading-[40px] mb-3">
          Checkout
        </h1>
        <p className="text-body-text-color font-medium">Homepage / Checkout</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 my-14">
        <div className=" w-full flex flex-col items-center">
          <div className="mb-6 px-5">
            <h2 className="text-2xl text-[32px] font-semibold text-primary leading-8">
              Order summary
            </h2>
          </div>
          <div className="flex flex-col justify-center w-full gap-6 px-5">
            {cart.length === 0 ? (
              <div>Your cart is empty.</div>
            ) : (
              cart.map((item) => <CheckoutCard key={item.id} {...item} />)
            )}
          </div>

          <div className="flex items-end justify-center flex-col w-full gap-6 px-5 mt-5">
            <CheckoutButton total={total} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
