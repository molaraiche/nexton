import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="border-t border-border">
      <div className="mx-auto container font-poppins pt-[60px]">
        <footer className="flex items-start md:items-center justify-between pb-[60px] flex-col md:flex-row ml-5 gap-y-10">
          <div className="flex flex-col justify-center">
            <Image src="/assets/logo.svg" alt="" width={119} height={46} />
            <div className="flex flex-col gap-y-3 mt-5">
              <Link
                href="*"
                className="flex items-center gap-1 text-body-text-color"
              >
                <Image src="/assets/fb.svg" width={20} height={20} alt="" />
                Facebook
              </Link>
              <Link
                href="*"
                className="flex items-center gap-1 text-body-text-color"
              >
                <Image src="/assets/yt.svg" width={20} height={20} alt="" />
                Youtube
              </Link>
              <Link
                href="*"
                className="flex items-center gap-1 text-body-text-color"
              >
                <Image
                  src="/assets/telegram.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Telegram
              </Link>
              <Link
                href="*"
                className="flex items-center gap-1 text-body-text-color"
              >
                <Image src="/assets/tt.svg" width={20} height={20} alt="" />
                Twitter
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-primary leading-6 mb-5">
              Getting Started
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="*" className="text-body-text-color leading-6">
                Release Notes
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Upgrade Guide
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Browser Support
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Dark Mode
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {" "}
            <h4 className="font-semibold text-primary leading-6 mb-5">
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="*" className="text-body-text-color leading-6">
                Prototyping
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Design Systems
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Pricing
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Security
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {" "}
            <h4 className="font-semibold text-primary leading-6 mb-5">
              Community
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="*" className="text-body-text-color leading-6">
                Discussion Forums
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Code of Conduct
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                Contributing
              </Link>
              <Link href="*" className="text-body-text-color leading-6">
                API Reference
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
