import { initialState } from "../initialState";
import { ADD_TO_CART } from "../actions/ADD_TO_CART";
import { REMOVE_FROM_CART } from "../actions/REMOVE_FROM_CART";
import { CHANGE_ATTRIBUTE_IN_CART } from "../actions/CHANGE_ATTRIBUTE_IN_CART";
import { FILL_CART } from "../actions/FILL_CART";

export const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.length) {
        if (
          state.find(
            (i) =>
              i.name === action.cart.name &&
              JSON.stringify(i.choosenSize.sort()) ===
                JSON.stringify(action.cart.choosenSize.sort())
          )
        ) {
          let index = state.findIndex(
            (i) =>
              i.name === action.cart.name &&
              JSON.stringify(i.choosenSize.sort()) ===
                JSON.stringify(action.cart.choosenSize.sort())
          );
          action.cart = {
            ...action.cart,
            countInCart: state[index].countInCart + action.cart.countInCart,
          };
          state[index] = action.cart;
          return [...state];
        }
        return [...state, action.cart];
      }
      return [...state, action.cart];

    case REMOVE_FROM_CART:
      if (state.length) {
        if (
          state.find(
            (i) =>
              i.name === action.cart.name &&
              JSON.stringify(i.choosenSize.sort()) ===
                JSON.stringify(action.cart.choosenSize.sort())
          )
        ) {
          let index = state.findIndex(
            (i) =>
              i.name === action.cart.name &&
              JSON.stringify(i.choosenSize.sort()) ===
                JSON.stringify(action.cart.choosenSize.sort())
          );
          if (state[index].countInCart > 1) {
            action.cart = {
              ...action.cart,
              countInCart: state[index].countInCart - action.cart.countInCart,
            };
            state[index] = action.cart;
            return [...state];
          }
          if (state[index].countInCart === 1) {
            state.splice(index, 1);
            return [...state];
          }
        }
      }
      break;
    case CHANGE_ATTRIBUTE_IN_CART: {
      let index = state.findIndex(
        (i) =>
          i.name === action.cart.name &&
          JSON.stringify(i.choosenSize.sort()) ===
            JSON.stringify(action.cart.choosenSize.sort())
      );
      state[index].choosenSize.map(
        (att) =>
          att[0] === action.choosenSize[0] && (att[1] = action.choosenSize[1])
      );
      return [...state];
    }
    case FILL_CART: {
      return [...action.cart];
    }
    // case REDEFINITION_CART: {
    //   return
    // }
    default:
      return state;
  }
};
