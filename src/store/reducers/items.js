import { initialState } from "../initialState";
import { GET_ITEMS } from "../actions/GET_ITEMS";

export const items = (state = initialState.items, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.value;
    default:
      return state;
  }
};
