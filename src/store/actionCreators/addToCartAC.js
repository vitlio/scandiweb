import { ADD_TO_CART } from "../actions/ADD_TO_CART";

export const addToCartAC = (value) => {
  return {
    type: ADD_TO_CART,
    cart: value,
  };
};
