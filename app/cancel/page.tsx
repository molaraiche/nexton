"use client";
const CancelledPayment: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-red-50 rounded-xl shadow-md">
      <svg
        className="w-20 h-20 mb-4 stroke-red-600"
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
        <line
          x1="20"
          y1="20"
          x2="44"
          y2="44"
          className="cross-line1"
          stroke="currentColor"
          strokeDasharray="33.94"
          strokeDashoffset="33.94"
        />
        <line
          x1="44"
          y1="20"
          x2="20"
          y2="44"
          className="cross-line2"
          stroke="currentColor"
          strokeDasharray="33.94"
          strokeDashoffset="33.94"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-red-700 mb-2">
        Payment Cancelled
      </h2>
      <p className="text-red-600 max-w-xs text-center">
        Your payment was not completed. Please try again or choose a different
        payment method.
      </p>

      <style jsx>{`
        svg {
          animation: circle-draw 1s forwards;
        }
        .circle {
          animation: circle-draw 1s forwards;
          animation-timing-function: ease-in-out;
        }
        .cross-line1 {
          animation: cross-draw 0.5s forwards;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }
        .cross-line2 {
          animation: cross-draw 0.5s forwards;
          animation-delay: 1.5s;
          animation-timing-function: ease-in-out;
        }

        @keyframes circle-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes cross-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CancelledPayment;
