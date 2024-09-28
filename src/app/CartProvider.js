import React, { createContext, useState } from "react";

// إنشاء الـ Context
export const CartContext = createContext();

// مزود الـ Context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
