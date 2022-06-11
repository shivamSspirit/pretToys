
import React, { createContext, useContext, useReducer } from "react";

import { wishInitialState, WishListReducer } from "../reducers/wishlistReducer";
export const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [wishState, dispatchWish] = useReducer(wishInitialState,WishListReducer);

  let contextValue = {
    wishState,
    dispatchWish
  }

  return (
    <WishContext.Provider value={contextValue}>
      {children}
    </WishContext.Provider>
  );
};

export const useWishList = () => useContext(WishContext);