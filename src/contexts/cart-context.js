
import React, { createContext, useContext, useReducer } from "react";

import { CartReducer, cartInitialState } from "../reducers/cartReducer";
export const CartContext = createContext('cart-context');

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, cartInitialState);

  let contextValue = {
    cartState,
    dispatchCart
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);