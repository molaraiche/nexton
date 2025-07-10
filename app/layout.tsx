import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import SmallFooter from "../components/SmallFooter";
import Footer from "../components/Footer";
import CartProviderWrapper from "./providers/CartProviderWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NEXTON - Modern Ecommerce Website",
  description:
    "NEXTON is a modern, fast, and SEO-optimized ecommerce website built with Next.js. Browse products, manage your cart, and shop with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <CartProviderWrapper>
          <main className="relative">
            <header className="container mx-auto px-3 z-20 relative">
              <Navbar />
            </header>
            <section className="relative z-0">{children}</section>
            <Footer />
            <SmallFooter />
          </main>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
