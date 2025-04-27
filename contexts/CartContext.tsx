"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false); // <-- NEW state

  // Get data from local storage 
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      }
    } catch (error) {
      console.error("LocalStorage load error:", error);
    } finally {
      setIsCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage && isCartLoaded) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } catch (error) {
      console.error("LocalStorage save error:", error);
    }
  }, [cart, isCartLoaded]);

  const addToCart = useCallback((product: Product, quantity: number) => {
    console.log("Adding to cart:", quantity);
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      } else {
        return [...prev, { ...product, quantity: quantity }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCart((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
    }),
    [cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
