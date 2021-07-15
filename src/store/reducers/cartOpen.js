import { initialState } from "../initialState";
import { CART_OPEN } from "../actions/CART_OPEN";

export const cartOpen = (state = initialState.cartOpen, action) => {
  switch (action.type) {
    case CART_OPEN:
      // return !state;
      return action.cartOpen
    default:
      return state;
  }
};
