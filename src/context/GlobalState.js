import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


//https://www.youtube.com/watch?v=VdXGIEYZuCw  UseReducer
//https://www.youtube.com/watch?v=0W6i5LYKCSI
//https://www.youtube.com/watch?v=coM0JK6o3mo  UseContext
const initialState = {
  cart: [],
  orders: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // state and dispatch are convention 

  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: item,
    });
  };

  const removeItemFromCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: item,
    });
  };

  const increaseQuantity = (item) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: item,
    });
  };

  const decreaseQuantity = (item) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: item,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        addItemToCartList,
        removeItemFromCartList,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        addItemToOrderList,
        removeItemFromOrderList, 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
