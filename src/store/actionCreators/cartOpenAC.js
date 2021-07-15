import { CART_OPEN } from "../actions/CART_OPEN";

export const cartOpenAC = (value) => {
  return {
    type: CART_OPEN,
    cartOpen: value
  };
};
