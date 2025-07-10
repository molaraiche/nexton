"use client";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { NumberTicker } from "./magicui/number-ticker";

const Cart = () => {
  const { cart, totalItems, removeFromCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center w-full font-poppins">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
        className="cursor-pointer"
      >
        <div className="relative font-poppins flex flex-row-reverse">
          <span className="bg-vibrant text-default w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
            <NumberTicker
              value={totalItems}
              className="whitespace-pre-wrap tracking-tighter"
            />
          </span>
          <BsCartDash className="w-6 h-6 text-primary" />
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <div className="bg-primary text-default w-full mt-5 md:w-[600px] min-h-[400px] flex flex-col absolute top-[20vh] md:top-[10vh] rounded-xl right-0 z-50 p-5">
              <div className="flex justify-between items-center h-[100px]">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <IoMdClose
                  onClick={() => setIsVisible(false)}
                  className="text-default w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="flex-grow m-3">
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between mb-4 bg-border"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                      />
                      <div className="font-medium flex items-center justify-between w-full px-5 text-primary">
                        <h3 className="text-xl ">{item.title}</h3>
                        <p>x {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id as number)}
                        className="text-red-500 cursor-pointer pr-3"
                      >
                        <MdDelete className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-auto">
                <Link href="/checkout" onClick={() => setIsVisible(false)}>
                  <button className="w-full py-3 bg-vibrant rounded-md text-white font-semibold cursor-pointer hover:opacity-90">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
