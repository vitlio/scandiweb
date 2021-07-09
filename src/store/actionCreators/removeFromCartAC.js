import { REMOVE_FROM_CART } from "../actions/REMOVE_FROM_CART";

export const removeFromCartAC = (value) => {
  return {
    type: REMOVE_FROM_CART,
    cart: value,
  };
};
