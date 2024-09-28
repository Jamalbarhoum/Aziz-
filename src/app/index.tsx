
import React from "react";
import App from "./App"
// rgb(160,215,235)
import { CartProvider } from "./CartProvider"; 
const index = () => {
  return (
      <>
      <CartProvider>
        <App/>
        </CartProvider>
      </>
  );
};

export default index;
