import Image from "next/image";

const SmallFooter = () => {
  return (
    <div className="border-t border-border py-8">
      <div className="container mx-auto font-poppins flex items-center justify-between flex-col md:flex-row">
        <p className="text-body-text-color">Nexton eCommerce. © 2024</p>
        <div className="flex items-center gap-1 h-[96px]">
          <Image src="/assets/visa.svg" width={56} height={32} alt="" />
          <Image src="/assets/paypal.svg" width={56} height={32} alt="" />
          <Image src="/assets/stripe.svg" width={56} height={32} alt="" />
          <Image src="/assets/verisign.svg" width={56} height={32} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SmallFooter;
