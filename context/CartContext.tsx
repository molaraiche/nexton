  "use client";
  import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
  } from "react";
  import { productType } from "@/types";
  import { Bounce, toast } from "react-toastify";

  type CartItem = productType & { quantity: number };

  interface CartContextType {
    cart: CartItem[];
    addToCart: (product: productType) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    totalItems: number;
  }

  const CartContext = createContext<CartContextType | undefined>(undefined);

  const CART_STORAGE_KEY = "cart";

  export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    useEffect(() => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      }
    }, []);

    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      }
    }, [cart]);

    const addToCart = (product: productType) => {
      setCart((prev) => {
        console.log("Adding to cart:", product);
        const existingItem = prev.find((item) => item.id === product.id);
        if (existingItem) {
          console.log("Incrementing quantity for:", product.id);
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        toast.success("Product has been added to cart", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return [...prev, { ...product, quantity: 1 }];
      });
    };

    const removeFromCart = (productId: number) => {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within CartProvider");
    }
    return context;
  };
