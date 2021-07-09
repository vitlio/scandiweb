import { initialState } from "../initialState";
import { GET_CURRENT_ITEM } from "../actions/GET_CURRENT_ITEM";

export const currentItem = (state = initialState.currentItem, action) => {
    switch (action.type) {
      case GET_CURRENT_ITEM:
        return action.currentItem;
      default:
        return state;
    }
  };