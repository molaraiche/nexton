"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <div className="flex items-center w-full">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        <div className="relative font-poppins flex flex-row-reverse">
          <span className="bg-vibrant text-default w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
            0
          </span>
          <BsCartDash className="w-6 h-6 text-default md:text-body-text-color" />
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <div className="bg-primary text-default w-full h-[150px] mt-5 md:w-[400px] md:h-[600px] absolute flex items-center justify-center top-[20vh] md:top-[5vh] right-0 flex-col">
              <div className="h-[100px] flex items-center justify-end px-10 w-full">
                <IoMdClose
                  onClick={() => setIsVisible(false)}
                  className="text-default w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="h-[500px] text-default flex items-center justify-center">
                {" "}
                Cart content (coming soon)
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
