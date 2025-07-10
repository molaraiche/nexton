"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React, { useEffect } from "react";

const SuccessPayment: React.FC = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-green-50 rounded-xl shadow-md">
      <svg
        className="w-20 h-20 mb-4 stroke-green-600"
        viewBox="0 0 64 64"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          className="circle"
          stroke="currentColor"
          strokeDasharray="188.4"
          strokeDashoffset="188.4"
        />
        <polyline
          points="18 34 28 44 46 26"
          className="checkmark"
          stroke="currentColor"
          strokeDasharray="44"
          strokeDashoffset="44"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-green-700 mb-2">
        Payment Successful
      </h2>
      <p className="text-green-600 max-w-xs text-center mb-6">
        Thank you! Your payment has been processed successfully.
      </p>
      <Link
        href="/shop"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Continue Shopping
      </Link>

      <style jsx>{`
        svg {
          animation: circle-draw 1s forwards;
        }
        .circle {
          animation: circle-draw 1s forwards;
          animation-timing-function: ease-in-out;
        }
        .checkmark {
          animation: checkmark-draw 0.7s forwards;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }

        @keyframes circle-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes checkmark-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessPayment;
