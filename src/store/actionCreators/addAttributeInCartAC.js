import { CHANGE_ATTRIBUTE_IN_CART } from "../actions/CHANGE_ATTRIBUTE_IN_CART";

export const addAttributeInCartAC = (value, choosenSize) => {
  return {
    type: CHANGE_ATTRIBUTE_IN_CART,
    cart: value,
    choosenSize,
  };
};
