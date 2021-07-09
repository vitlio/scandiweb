import { FILL_CART } from "../actions/FILL_CART";

export const fillCartAC = (value) => {
  return {
    type: FILL_CART,
    cart: value,
  };
};
